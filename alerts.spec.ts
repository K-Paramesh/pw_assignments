import {test,expect} from "@playwright/test";
test("learningAlerts ",async({page})=>{
await page.goto('https://leafground.com/alert.xhtml')

page.on('dialog', async (alert) => {
    let alertType = alert.type();
    let alertMessage = alert.message();
    console.log(`Alert Type: ${alertType}`);
    console.log(`Alert Message: ${alertMessage}`);
    switch(alertType) {
        case 'alert':
            await alert.accept();
            break;
        case 'confirm':
            await alert.accept();
            break;
        case 'prompt':
            await alert.accept('Sample input');
            break;
        default:
            console.log('Unknown alert type');
    }
})
})