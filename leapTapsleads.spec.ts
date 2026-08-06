import {test,expect} from "@playwright/test";
test("leapLeads_Create_edit_delete ",async({page})=>{
  test.setTimeout(60000); // 60 seconds
  page.goto('http://leaftaps.com/opentaps/control/main')
  await page.getByLabel('Username').fill('DemoCSR');
  await page.getByLabel('Password').fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('link', { name: 'Create Lead' }).click();
  await page.locator('#createLeadForm_companyName').fill('ABC Company');
  await page.locator('#createLeadForm_firstName').fill('Ayaan');
  await page.locator('#createLeadForm_lastName').fill('Khan');
  await page.locator('#createLeadForm_personalTitle').fill('Mr.');
  await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');
  await page.locator('#createLeadForm_annualRevenue').fill('1150000');
  await page.locator('#createLeadForm_departmentName').fill('Software Testing');
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('100');
  await page.locator('//input[@type="submit"]').scrollIntoViewIfNeeded();
  await page.locator('//input[@type="submit"]').click();
  await expect(page.locator('#viewLead_firstName_sp')).toContainText('Ayaan');
  await expect(page.locator('#viewLead_lastName_sp')).toContainText('Khan');
  await expect(page.locator('#viewLead_companyName_sp')).toContainText('ABC Company');
  await page.getByRole('link', { name: 'Find Leads' }).click();
  await page.locator('(//input[@name="firstName"])[3]').fill('Ayaan');
  await page.getByRole('button', { name: 'Find Leads' }).click();
  await page.locator('//a[text()="Ayaan"]').scrollIntoViewIfNeeded();
  await page.locator('//a[text()="Ayaan"]').click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.locator('#updateLeadForm_companyName').clear();
  await page.locator('#updateLeadForm_companyName').fill('XXX Company');
  await page.locator('#updateLeadForm_departmentName').clear();
  await page.locator('#updateLeadForm_departmentName').fill('Software Testing');
  await page.locator('//input[@value="Update"]').scrollIntoViewIfNeeded();
  await page.locator('//input[@value="Update"]').click();
  await expect(page.locator('#viewLead_companyName_sp')).toContainText('XXX Company');
  await page.getByRole('link', { name: 'Delete' }).click();



    







  


  








})