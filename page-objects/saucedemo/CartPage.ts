import { Page, Locator} from "@playwright/test";

export class CartPage {

    readonly page: Page;
    readonly pageTitle: Locator;
    readonly cartItems: Locator;
    readonly removeButton: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.removeButton = page.locator('.cart_button');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }





}