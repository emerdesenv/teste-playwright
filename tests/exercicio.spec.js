import { test, expect } from '@playwright/test';

test.describe('Teste de Fluxo de Compra @compra', () => {
    test('Compra de 1 item com sucesso', async ({ page }) => {
        // 1. Acessar a página de login
        await page.goto('https://www.saucedemo.com/');
        
        // 2. Realizar o login
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // 3. Verificar se está na página de produtos
        await expect(page).toHaveURL(/inventory.html/);

        // 4. Escolher um produto (ex.: "Sauce Labs Backpack")
        const itemName = 'Sauce Labs Backpack'; // nome de exemplo
        const itemLocator = page.locator('.inventory_item').filter({ hasText: itemName });
        await expect(itemLocator).toBeVisible();

        // 5. Clicar em "Add to cart"
        await itemLocator.locator('button').click();

        // 6. Ir para o carrinho
        await page.click('.shopping_cart_link');
        await expect(page).toHaveURL(/cart.html/);

        // 7. Validar se o produto está no carrinho
        const cartItem = page.locator('.cart_item').filter({ hasText: itemName });
        await expect(cartItem).toBeVisible();

        // 8. Clicar em "Checkout"
        await page.click('#checkout');

        // 9. Preencher informações de checkout
        await page.fill('#first-name', 'Maria');
        await page.fill('#last-name', 'Silva');
        await page.fill('#postal-code', '12345-678');

        // 10. Continuar
        await page.click('#continue');

        // 11. Verificar tela de resumo do pedido
        await expect(page).toHaveURL(/checkout-step-two.html/);

        // 12. Finalizar compra
        await page.click('#finish');

        // 13. Verificar página de confirmação
        await expect(page).toHaveURL(/checkout-complete.html/);
        const confirmationText = page.locator('.complete-header');
        await expect(confirmationText).toContainText('Thank you for your order!');
    });
});