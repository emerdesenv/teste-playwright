import { chromium } from "@playwright/test";

const TOKEN_FILEPATH = "playwright/auth/user.json";

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await page.context().storageState({ path: TOKEN_FILEPATH });
};

export default globalSetup;