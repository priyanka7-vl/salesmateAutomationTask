const { By } = require('selenium-webdriver');
const {strictEqual} = require('assert');

class Common {
   constructor(driver) {
      this.driver = driver;
   }

   async login(email,password)
   {
      let email1 = await this.driver.findElement(By.id('email'));
      email1.sendKeys(email);
      await this.driver.sleep(1000);
      let pswd = await this.driver.findElement(By.id('password'));
      pswd.sendKeys(password);
      await this.driver.sleep(1000);
      await this.driver.findElement(By.id('login_btn')).click();
   }

   async goToMyAccount() {
      await this.driver.sleep(8000);   
      await this.driver.findElement(By.xpath("//span[@class='thumb-sm avatar avatar-6']")).click();
      await this.driver.findElement(By.xpath("//a[text()='My Account']")).click();
   }

   async checkDefaultDashboardTitle() {
      await this.driver.sleep(10000);
      const title = await this.driver.getTitle();
      const expectedTitle = 'Default Dashboard';
      strictEqual(title,expectedTitle);
   }

   async checkMyAccountTitle() {
      await this.driver.sleep(5000);
      const title = await this.driver.getTitle();
      const expectedTitle = 'General - My Account';
      strictEqual(title,expectedTitle);
   }

   async clickOnSecurity() {
      await this.driver.sleep(5000);
      await this.driver.findElement(By.xpath("//a[text()='Security']")).click();
   }

   async checkSalesmateTitle() {
      await this.driver.sleep(5000);
      const title = await this.driver.getTitle();
      const expectedTitle = 'Salesmate';
      strictEqual(title,expectedTitle);
   }

   async changePassword(oldpswd,newpswd) {
      await this.driver.sleep(2000);
      let oldPassword = await this.driver.findElement(By.id('oldPassword'));
      oldPassword.sendKeys(oldpswd);
      await this.driver.sleep(1000);
      let newPassword = await this.driver.findElement(By.id('newPassword'));
      newPassword.sendKeys(newpswd);
      await this.driver.sleep(1000);
      let confirmPassword = await this.driver.findElement(By.id('confirmPassword'));
      confirmPassword.sendKeys(newpswd);
      await this.driver.findElement(By.id('btnUpdate')).click();
   } 

   async clickonSignOut() {
      await this.driver.sleep(3000);   
      await this.driver.findElement(By.xpath("//span[@class='thumb-sm avatar avatar-6']")).click();
      await this.driver.sleep(3000);
      await this.driver.findElement(By.xpath("//ul//li//a[@href='/fe/logout']")).click();
      await this.driver.sleep(2000);
   }

   async checkSalesmateLoginTitle() {
      await this.driver.sleep(5000);
      const title = await this.driver.getTitle();
      const expectedTitle = 'Login -- Salesmate';
      strictEqual(title,expectedTitle);
   }
}

module.exports = Common;