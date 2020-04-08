const { Given, When, Then,AfterAll} = require('cucumber');
const { Builder,Capabilities,By} = require('selenium-webdriver');
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();
const {strictEqual} = require('assert');
const Common = require('../../../shared/common');
const common = new Common(driver);
const inputs = require('../../../shared/inputs.json');
//1
Given('I am on the salesmate login page',{timeout: 2 * 18000}, async function () {
    await driver.manage().window().maximize();
    await driver.get('https://kalp.salesmate.io/login.html#');
});

When('I enter the valid credentials it should be logged in',{timeout: 2 * 18000}, async function () {
    await common.login(inputs.Login.Email,inputs.Login.Password);
});

Then('Browser title should be matched with the page opened',{timeout: 2 * 20000}, async function () {
    await common.checkSalesmateTitle();
});
//2
When('I clicked on MyAccount button',{timeout: 2 * 18000}, async function() {
    await common.goToMyAccount();
})

Then('MyAccount page should get opened',{timeout: 2 * 18000}, async function () {
    await common.checkMyAccountTitle();
})
//3
When('I click on Security button',{timeout: 2 * 18000},async function() {
    await common.clickOnSecurity();
})

Then('Change password page should be opened',{timeout: 2 * 18000},async function (){
    await common.checkSalesmateTitle();
})
//4
When('I enter valid old,new and re-type password and click on update button',{timeout: 2 * 18000},async function (){
    await common.changePassword(inputs.Login.Password,inputs.Login.NewPassword);
})
Then('Salesmate login password changed and succesful message displayed on change password page',{timeout: 2 * 18000},async function () {
    await driver.sleep(1000)
    let msg = await driver.findElement(By.xpath('//span[@class="noty_text"]')).getText();
    console.log(msg);
    strictEqual(msg,'Password updated successfully.');
})
//5
When('User clicks on profile picture and then on signout button',{timeout: 2 * 18000},async function() {
    await common.clickonSignOut();
})
Then('Salesmate login page should be opened',{timeout: 2 * 18000},async function() {
    await common.checkSalesmateLoginTitle();
})
//6
When('User enter valid email and old password',{timeout: 2 * 18000},async function() {
    await common.login(inputs.Login.Email,inputs.Login.Password);
    await driver.sleep(2000)
})
Then('Invalid password message shoulb be displayed',{timeout: 2 * 18000},async function() {
    await driver.sleep(2000)
    let alert = await driver.findElement(By.xpath('//div[@class="alert alert-danger"]')).getText();
    await driver.sleep(2000)
    strictEqual(alert, 'Email or password is invalid.');
})
//7
When('User enter valid email and new password',{timeout: 2 * 18000},async function() {
    await driver.navigate().refresh();
    await common.login(inputs.Login.Email,inputs.Login.NewPassword);
})
Then('Default Dashboard should be opened',{timeout: 2 * 18000},async function() {
    await common.checkDefaultDashboardTitle();
})
AfterAll('end', async function(){
    await driver.quit();
});