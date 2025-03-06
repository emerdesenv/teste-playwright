import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);
    }

    async continueCheckout() {
        await this.page.click('#continue');
        await expect(this.page).toHaveURL(/checkout-step-two.html/);
    }

    async finishCheckout() {
        await this.page.click('#finish');
    }

    async verifyConfirmation() {
        await expect(this.page).toHaveURL(/checkout-complete.html/);
        const confirmationText = this.page.locator('.complete-header');
        await expect(confirmationText).toContainText('Thank you for your order!');
    }
}