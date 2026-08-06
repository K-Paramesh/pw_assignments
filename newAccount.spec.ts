import {test,expect} from "@playwright/test";
test("Accounts_Create_edit_delete ",async({page})=>{
  test.setTimeout(100000); // 60 seconds
  await page.goto('https://login.salesforce.com/?locale=in')
  await page.getByLabel('Username').fill(`dilipkumar.rajendran@testleaf.com`)
  await page.getByLabel(`Password`).fill(`TestLeaf@2025`)
  await page.locator(`#Login`).click()
  expect(await page).toHaveTitle("Home | Salesforce");
  expect(await page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");
  await page.locator(`.slds-icon-waffle`).click();
  await page.getByText('View All').last().scrollIntoViewIfNeeded();
  await page.getByText('View All').last().click();
  await page.getByPlaceholder(`Search apps or items...`).fill(`Service`);
  await page.locator('(//mark[text()="Service"])[1]').click();
  await page.locator(`//a[@title='Accounts']`).click();
  await page.getByRole(`link`, { name: `New` }).click();
  await page.locator('input[name="Name"]').fill(`My_Account`);
  await page.locator('//button[text()="Save"]').click();
  expect(await page.locator(`//div[@class='slds-theme--success slds-notify--toast slds-notify slds-notify--toast forceToastMessage toastHidden']`).isVisible());

})