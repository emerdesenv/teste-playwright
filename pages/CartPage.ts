import { Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductInCart(productName: string) {
        const cartItem = this.page.locator('.cart_item').filter({ hasText: productName });
        await expect(cartItem).toBeVisible();
    }

    async checkout() {
        await this.page.click('#checkout');
    }
}