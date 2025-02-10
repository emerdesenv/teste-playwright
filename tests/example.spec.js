// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('Login com sucesso. @login', async ({ page }) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const texto = await page.waitForSelector('text=Swag Labs');
    await texto.scrollIntoViewIfNeeded();
});

test('Login com erro. @login', async ({ page }) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_saude');
    await page.locator('[data-test="login-button"]').click();

    //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.afterEach(async ({ page }) => {
    //Processo final depois dos testes
});