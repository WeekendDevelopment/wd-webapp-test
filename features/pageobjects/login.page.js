

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[data-ref="loginUsername.container"]');
    }

    get inputPassword () {
        return $('[data-ref="loginUsername.container"]');
    }

    get btnSubmit () {
        return $('[data-ref="loginButton"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async filler (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
 
    async displayed () {
        await this.inputUsername.isDisplayed();
        await this.inputPassword.isDisplayed();
        await this.btnSubmit.isDisplayed();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
