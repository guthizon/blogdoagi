const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
    },
    
    baseUrl: "https://staging-app.haulcompliance.com",
    pageLoadTimeout: 80000,
    chromeWebSecurity: false,
    requestTimeout: 60000,
    responseTimeout: 60000,
    defaultCommandTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/reports/mochareports/assets",
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies: true,
    watchForFileChanges: false,
    viewportWidth: 1536,
    viewportHeight: 720,
    experimentalOriginDependencies: true,
    retries: {
      "runMode": 1,
      "openMode": 0
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        reportFilename: "[name]-report",
        quite: true,
        overwrite: false,
        html: false,
        json: true
      },
    }
  }
});
