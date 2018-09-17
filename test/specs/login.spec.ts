import { browser } from "protractor";
import { LoginPage } from "../pages/loginPage";

const config = require('../../protractor.conf').config;

describe('to test login page', () => {

    const login : LoginPage = new LoginPage();

    beforeAll(async () => {
        await browser.get(config.baseUrl);
        await login.loginLink.click();
    });

    it('enter user credentials', async () => {
        await login.username.sendKeys("admin");
        await login.password.sendKeys("admin");
        await login.submit.click();
    });

    it('validate if successfully logged in', async () => {
        await expect(login.dashboardText.getText()).toEqual(login.loggedInText);
    })


})