// @ts-check
import { test, expect, chromium } from '@playwright/test';

const TOKEN_FILEPATH = "./fixtures/user.json";
test.beforeAll(async () => {
    const browser = await chromium.launch(); // Inicia o navegador
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(1000);
    await page.context().storageState({ path: TOKEN_FILEPATH });
});

test.use({ storageState: TOKEN_FILEPATH });

test('Já logado, pegando do contexto. @login', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    const texto = await page.waitForSelector('text=Products');
    await texto.scrollIntoViewIfNeeded();
});

test('Outro teste de texto. @login', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    const texto = await page.waitForSelector('text=Bolt');
    await texto.scrollIntoViewIfNeeded();
});