const { defineConfig } = require("cypress");

const {setupNodeEvents} = require("./base.config");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/commands.js",
    baseUrl: "https://twig.sbx.bestegg.com/",
    viewportWidth:1200,
    setupNodeEvents,
  },
  env: {
    loginUrl: 'https://twig.sbx.bestegg.com/financial-health/auth/login/?next=/financial-health/home/',
    authUrl: 'https://auth.sbx.bestegg.com/auth-identity-service/api/v1/cognito/login',
    redirectUrl: 'https://www.sbx.bestegg.com/financial-health/rf/'
  },


});

// projectId: "zubidk"
