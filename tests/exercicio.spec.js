import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import loginData from '../data/login.json';

test.describe('Teste de Fluxo de Compra @compra', () => {
    test('Compra de 1 item com sucesso', async ({ page }) => {
        // Instancia dos Page Objects
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await test.step('Acessar a página de login e realizar o login', async () => {
            await loginPage.goto();
            await loginPage.login(loginData.username, loginData.password);
        });

        await test.step('Verificar se está na página de produtos', async () => {
            await inventoryPage.verifyPage();
        });

        await test.step(`Selecionar o produto "${loginData.productName}" e adicioná-lo ao carrinho`, async () => {
            await inventoryPage.addProductToCart(loginData.productName);
        });

        const cartPage = new CartPage(page);

        await test.step('Acessar o carrinho e validar o produto selecionado', async () => {
            await inventoryPage.goToCart();
            await expect(page).toHaveURL(/cart.html/);
            await cartPage.verifyProductInCart(loginData.productName);
        });

        const checkoutPage = new CheckoutPage(page);

        await test.step('Preencher informações de checkout e finalizar a compra', async () => {
            await cartPage.checkout();
            await checkoutPage.fillCheckoutInformation(loginData.firstName, loginData.lastName, loginData.postalCode);
            await checkoutPage.continueCheckout();
            await checkoutPage.finishCheckout();
        });

        await test.step('Verificar a página de confirmação da compra', async () => {
            await checkoutPage.verifyConfirmation();
        });
    });
});