// @ts-check
import { test, expect } from '@playwright/test';

test('Teste de contexto. @login', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
});