import {test, expect} from '@playwright/test';
import { LoginPage } from '../page-objects/saucedemo/LoginPage';    

test.describe ('SauceDemo Login Tests', () => {

    test ('successful login with standard user', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test ('Login fails with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');

        await expect(page.locator('[data-test="error"]')).toBeVisible();

        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Username and password do not match');
    });

    test ('Login fails with locked out user', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(page.locator('[data-test="error"]')) 
            .toContainText('Sorry, this user has been locked out');
    });

    test ('can clear error message', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong');

        await expect(loginPage.errorMessage).toBeVisible();
        await loginPage.clearError();
        await expect(loginPage.errorMessage).not.toBeVisible();
    });
});