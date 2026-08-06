import {test,chromium } from "@playwright/test";
test("salesForce_login",async()=>{
    const browser = await chromium.launch({channel:"chrome",headless:false})
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://login.salesforce.com/")
    await page.locator('#username').fill('paramesh1095.fd48c83a89e7@agentforce.com')
    await page.locator('#password').fill('Paramesh@4')
    await page.locator('#Login').click()
    const pageTitle = await page.title();
    const currentURL = page.url();

    console.log(`The page title is ${pageTitle}`);
    console.log(`The URL of the page is ${currentURL}`);
})
