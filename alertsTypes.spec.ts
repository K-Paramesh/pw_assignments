import {test,expect} from "@playwright/test";
test("learningAlertsHandling ",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

page.on('dialog', async(alert) => {
    let alertType = alert.type();
    let alertMessage = alert.message();
    console.log(`Alert Type: ${alertType}`);
    console.log(`Alert Message: ${alertMessage}`);

    expect(alertType).toBe('alert');
    expect(alertMessage).toBe('I am a JS Alert');
    alert.accept();
    console.log(await page.locator('#result').innerText());
})

await page.locator('//button[text()="Click for JS Alert"]').click();


page.on('dialog', async(alert) => {
    let alertType = alert.type();
    let alertMessage = alert.message();
    console.log(`Alert Type: ${alertType}`);
    console.log(`Alert Message: ${alertMessage}`);

    expect(alertType).toBe('confirm');
    expect(alertMessage).toBe('I am a JS Confirm');
    alert.accept();
    console.log(await page.locator('#result').innerText());
})

await page.getByRole('button', { name: 'Click for JS Confirm' }).click();


page.on('dialog', async(alert) => {
    let alertType = alert.type();
    let alertMessage = alert.message();
    console.log(`Alert Type: ${alertType}`);
    console.log(`Alert Message: ${alertMessage}`);

    expect(alertType).toBe('confirm');
    expect(alertMessage).toBe('I am a JS Confirm');
    alert.dismiss();
    console.log(await page.locator('#result').innerText());
})

await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

page.on('dialog', async(alert) => {
    let alertType = alert.type();
    let alertMessage = alert.message();
    console.log(`Alert Type: ${alertType}`);
    console.log(`Alert Message: ${alertMessage}`);

    expect(alertType).toBe('prompt');
    expect(alertMessage).toBe('I am a JS Prompt');
    alert.accept('Sample input');
    console.log(await page.locator('#result').innerText());
})

})
