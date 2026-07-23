function launchBrowser(browser) {
    if (browser === "Chrome") {
        console.log("Chrome browser is launched");
    } else {
        console.log("Chrome browser is not launched");
    }
}

function runTest(testType) {
    switch (testType) {
        case "Regression":
            console.log("This is regression testing");
            break;

        case "Sanity":
            console.log("This is sanity testing");
            break;

        default:
            console.log("This is smoke testing");
    }
}

launchBrowser("Chrome");
runTest("Sanity");
