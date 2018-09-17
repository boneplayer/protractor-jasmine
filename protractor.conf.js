const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {

    allScriptsTimeout: 120000,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://127.0.0.1:8080/',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'jasmine',
    
    specs: [
        './test/specs/**/*.ts'
    ],

    suites : [

        {
            "login": "../specs/login.spec.ts",
            "branch": "../specs/branch.spec.ts"

        }

    ],
   
    logLevel: 'INFO',
    
    beforeLaunch: () => {
        require('ts-node').register({
            project: './tsconfig.e2e.json'
        });
    },
    
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
        showColors: true,
        random: false,
    },

    onPrepare: () => {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: 'target/screenshots',
            filename: 'protractor_jasmine_report.html'
        }));

    },
};
