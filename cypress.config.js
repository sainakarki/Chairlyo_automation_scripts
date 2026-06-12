require('dotenv').config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {

    experimentalModifyObstructiveThirdPartyCode: true,  // ✅ keep this
    experimentalOriginDependencies: true,               // ✅ required for cy.origin()
    // ❌ removed chromeWebSecurity — does NOT work in Firefox

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.env.email = process.env.EMAIL;
      config.env.password = process.env.PASSWORD;
      config.baseUrl = process.env.BASE_URL;
      return config;
    },
  },
});