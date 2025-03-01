const { Builder, By} = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameField = By.id('user-name');
        this.passwordField = By.id('password');
        this.loginButton = By.id('login-button');
        this.errorMessage = By.css('.error-message-container');
    }

    async open() {
        await this.driver.get('https://www.saucedemo.com/');
        await driver.manage().window().maximize();
        //await driver.manage().setTimeouts({ implicit: 10000});
    }

    async login(username, password) {
        await this.driver.findElement(this.usernameField).sendKeys(username);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }

    async getErrorMessage() {
        return await this.driver.findElement(this.errorMessage).getText();
    }

    async closeErrorMessage() {
        const closeButton = await this.driver.findElement(By.css('.error-button'));
        await closeButton.click();
    }
}

module.exports = LoginPage;