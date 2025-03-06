import { Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly cartLink = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyPage() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }

    async addProductToCart(productName: string) {
        const product = this.page.locator('.inventory_item').filter({ hasText: productName });
        await expect(product).toBeVisible();
        await product.locator('button').click();
    }

    async goToCart() {
        await this.page.click(this.cartLink);
    }
}