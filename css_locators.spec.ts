import {test} from "@playwright/test";
test("learning css selector",async({page})=>{
    await page.goto("https://orgfarm-3cc12440c8-dev-ed.develop.my.salesforce.com/")
    await page.locator('#username').fill('paramesh1095.fd48c83a89e7@agentforce.com')
    await page.locator('#password').fill('Paramesh@4')
    await page.locator('#rememberUn').click()
    //await page.locator('label[for="rememberUn"]').click();
    await page.locator('#Login').click()
});
