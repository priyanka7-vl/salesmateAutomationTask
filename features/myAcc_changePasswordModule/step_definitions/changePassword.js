const { Given, When, Then,AfterAll} = require('cucumber');
const { Builder,Capabilities, By} = require('selenium-webdriver');
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();
const Common = require('../../../shared/common');
const common = new Common(driver);

Given('I am on the salesmate login page', {timeout: 2 * 9000}, async function () {
    await driver.get('https://kalp.salesmate.io/login.html#');
});

When('I enter the valid credentials it should be logged in',{timeout: 2 * 18000}, async function () {
    await common.login('priyanka.vlr@rapidops.com','123456');
});

Then('the browser title should be matched with the page opened', {timeout: 2 * 18000}, async function () {
    console.info('sdfghj')
    await common.checkDefaultDashboardTitle();
});

When('I clicked on MyAccount button', {timeout: 2 * 18000}, async function() {
    await common.goToMyAccount();
})

Then('MyAccount page should get opened', {timeout: 2 * 18000}, async function () {
    await common.checkMyAccountTitle();
})

AfterAll('end', async function(){
    await driver.quit();
});