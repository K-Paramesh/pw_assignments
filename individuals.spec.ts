import {test,expect} from "@playwright/test";
test("individuals_Create_edit_delete ",async({page})=>{
  test.setTimeout(60000); // 60 seconds
  page.goto('https://login.salesforce.com/?locale=in')
  await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
  await page.locator(`#password`).fill(`TestLeaf@2025`)
  await page.locator(`#Login`).click()
  if(await page.locator(`#header`).isVisible()){
    await page.click(`//a[text()='Remind Me Later']`)
    await page.click(`.slds-icon-waffle`)
    await page.click(`//button[text()='View All']`)
    await page.locator(`(//input[@type='search'])[2]`).fill(`Individuals`)
    await page.click(`//mark[text()='Individuals']`)
    await page.click(`//div[text()='New']`)
    await page.locator("//input[@placeholder='Last Name']").scrollIntoViewIfNeeded();
    await page.locator(`//input[@placeholder='Last Name']`).fill(`Ayaan`)
    await page.locator("//span[text()='Save']").click();
    await page.click(`//div[text()='Edit']`)
    await page.click(`(//span[text()='--None--'])[1]`)
    await page.click(`//a[text()='Mr.']`)
    await page.locator(`//input[@placeholder='First Name']`).fill(`K`)
    await page.locator("//span[text()='Save']").click();
    await page.click(`//div[text()='Delete']`)
    await page.click(`//span[text()='Delete']`)
  } else{
    await page.click(`.slds-icon-waffle`)
    await page.click(`//button[text()='View All']`)
    await page.locator(`(//input[@type='search'])[2]`).fill(`Individuals`)
    await page.click(`//mark[text()='Individuals']`)
    await page.click(`//div[text()='New']`)
    await page.locator("//input[@placeholder='Last Name']").scrollIntoViewIfNeeded();
    await page.locator(`//input[@placeholder='Last Name']`).fill(`Ayaan`)
    await page.locator("//span[text()='Save']").click();
    await page.click(`//div[text()='Edit']`)
    await page.click(`(//span[text()='--None--'])[1]`)
    await page.click(`//a[text()='Mr.']`)
    await page.locator(`//input[@placeholder='First Name']`).fill(`K`)
    await page.locator("//span[text()='Save']").click();
    await page.click(`//div[text()='Delete']`)
    await page.click(`//span[text()='Delete']`)
  }
})