import {test,chromium,firefox  } from "@playwright/test";
test("multiBrowser",async()=>{
    const browser = await chromium.launch({channel:"msedge",headless:false})
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.redbus.in/')
    const pageTitle = await page.title();
    const pageURL = await page.url();

    console.log(`The page title is ${pageTitle}`);
    console.log(`The current page url is ${pageURL}`);

    const browser_2 = await firefox.launch({headless:false})
    const context_2 = await browser_2.newContext();
    const page_2 = await context_2.newPage();
    await page_2.goto('https://www.flipkart.com/')
    const pageTitle_2 = await page_2.title();
    const pageURL_2 = await page_2.url();

    console.log(`The page title is ${pageTitle_2}`);
    console.log(`The current page url is ${pageURL_2}`);
})