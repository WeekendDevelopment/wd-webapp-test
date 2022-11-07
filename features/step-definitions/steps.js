import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.filler(username, password)
});

When(/^I check if all the elements in the (\w+) page are displayed as expected$/, async (page) => {
    await pages[page].displayed()
});

