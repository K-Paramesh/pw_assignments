import {test,expect} from "@playwright/test";
test("pvr_cinemas_booking ",async({page})=>{
  test.setTimeout(60000); // 60 seconds
  await page.goto('https://www.pvrcinemas.com/')
  await page.evaluate(() => {
    document.body.style.zoom = "60%";
}); 
  await page.getByRole('combobox', { name: 'Cities' }).fill('Chennai');
  await page.getByRole('option', { name: 'Chennai' }).click();
  await page.locator('//span[text()="Select Movie"]').click();
  await page.locator(`//span[text()='SPIDERMAN BRAND NEW DAY']`).click();
 // await page.locator('#date').click();
 // await page.waitForTimeout(1500);
  await page.getByText('Today, 7 Aug', { exact: true }).click();
  //await page.locator('#cinema').click();
  await page.locator(`//span[text()='PVR Heritage RSL ECR Chennai']`).click();
 // await page.locator('#time').click();
  await page.locator(`//span[contains(text(), '06:30 PM')]`).scrollIntoViewIfNeeded
  await page.locator(`//span[contains(text(), '06:30 PM')]`).click();
  await page.locator('//button[@type="submit"]').click();
  await page.locator('//button[text()="Accept"]').click();
  await page.locator('.seat-current-pvr').first().click();
  const info = await page.locator('.seat-info').textContent();
  console.log(info);
  const total = await page.locator('.grand-prices').textContent();
  console.log(total);
  await page.locator('//button[text()="Proceed"]').click();
  const grant_total= await page.locator('(//h6/span)[3]').textContent();
  console.log(grant_total);
  if(grant_total===total){
    console.log("Total amount is correct");
  }else{
    console.log("Total amount is incorrect");
  }







})