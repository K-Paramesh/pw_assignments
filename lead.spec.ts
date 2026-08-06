import {test,expect} from "@playwright/test";
test("lead_Create_edit_delete ",async({page})=>{
  test.setTimeout(60000); // 60 seconds
  page.goto('https://login.salesforce.com/?locale=in')
  await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
  await page.locator(`#password`).fill(`TestLeaf@2025`)
  await page.locator(`#Login`).click()
  if(await page.locator(`#header`).isVisible()){
    await page.click(`//a[text()='Remind Me Later']`)
    await page.click(`.slds-icon-waffle`)
    await page.click(`//button[text()='View All']`)
    await page.click(`(//mark[text()='Sales'])[2]`)
    //await page.click(`//p[text()='Sales']`)
    await page.click(`//a[@title='Leads']`)
    await page.click(`//button[text()='New']`)
    await page.click(`//button[@name='salutation']`)
    await page.click(`//span[text()='Mr.']`)
    await page.locator(`//input[@name='lastName']`).fill(`Ayaan`)
    await page.locator(`//input[@name='Company']`).fill(`My_Company`)
    await page.locator("//button[@name='SaveEdit']").scrollIntoViewIfNeeded();
    await page.locator("//button[@name='SaveEdit']").click();
   // expect(await page.locator(`//lightning-formatted-name[text()='Mr.  AYAAN']`).toBeVisible());
    //await page.click(`//span[text()='Show more actions']`)
    await page.click(`//button[text()='Edit']`)
    await page.locator(`//input[@name='Company']`).clear();
    await page.locator(`//input[@name='Company']`).fill(`My_Company_Updated`)
    await page.locator("//button[@name='SaveEdit']").scrollIntoViewIfNeeded();
    await page.locator("//button[@name='SaveEdit']").click();
    //await expect(page.getByText('My_Company_Updated')).toBeVisible();
    //await page.click(`//span[text()='Show more actions']`)
    await page.click(`//button[text()='Delete']`)
    await page.click(`//span[text()='Delete']`)
  } else{
    await page.click(`.slds-icon-waffle`)
    await page.click(`//button[text()='View All']`)
    await page.locator(`(//input[@type='search'])[2]`).fill(`Sales`)
    await page.click(`(//mark[text()='Sales'])[2]`)
    //await page.click(`//p[text()='Sales']`)
    await page.click(`//a[@title='Leads']`)
    await page.click(`//button[text()='New']`)
    await page.click(`//button[@name='salutation']`)
    await page.click(`//span[text()='Mr.']`)
    await page.locator(`//input[@name='lastName']`).fill(`Ayaan`)
    await page.locator(`//input[@name='Company']`).fill(`My_Company`)
    await page.locator("//button[@name='SaveEdit']").scrollIntoViewIfNeeded();
    await page.locator("//button[@name='SaveEdit']").click();
   // expect(await page.locator(`//lightning-formatted-name[text()='Mr.  AYAAN']`).toBeVisible());
    //await page.click(`//span[text()='Show more actions']`)
    await page.click(`//button[text()='Edit']`)
    await page.locator(`//input[@name='Company']`).clear();
    await page.locator(`//input[@name='Company']`).fill(`My_Company_Updated`)
    await page.locator("//button[@name='SaveEdit']").scrollIntoViewIfNeeded();
    await page.locator("//button[@name='SaveEdit']").click();
    //await expect(page.getByText('My_Company_Updated')).toBeVisible();
    //await page.click(`//span[text()='Show more actions']`)
    await page.click(`//button[text()='Delete']`)
    await page.click(`//span[text()='Delete']`)
  }
})