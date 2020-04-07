const { By } = require('selenium-webdriver');
const {strictEqual} = require('assert');

class Common {
   constructor(driver) {
      this.driver = driver;
   }

   async login(email,password)
   {
      await this.driver.sleep(1000);
      let email1 = await this.driver.findElement(By.id('email'));
      email1.sendKeys(email);
      await this.driver.sleep(1000);
      let pswd = await this.driver.findElement(By.id('password'));
      pswd.sendKeys(password);
      await this.driver.sleep(1000);
      await this.driver.findElement(By.id('login_btn')).click();
      await this.driver.sleep(5000);
   }

   async goToMyAccount() {
      await this.driver.findElement(By.xpath("//span[@class='thumb-sm avatar avatar-6']")).click();
      await this.driver.findElement(By.xpath("//a[text()='My Account']")).click();
   }

   async checkDefaultDashboardTitle() {
      await this.driver.sleep(20000);
      const title = await this.driver.getTitle();
      const expectedTitle = 'Default Dashboard';
      strictEqual(title,expectedTitle);
   }

   async checkMyAccountTitle() {
      await this.driver.sleep(20000);
      const title = await this.driver.getTitle();
      const expectedTitle = 'General - My Account';
      strictEqual(title,expectedTitle);
   }
}



module.exports = Common;