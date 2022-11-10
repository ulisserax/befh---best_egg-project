const { defineConfig } = require("cypress");
require('dotenv').config;
const {setupNodeEvents} = require("./base.config");

module.exports = defineConfig({
  env: {
    loginUrl: 'https://twig.uat.bestegg.com/financial-health/auth/login/?next=/financial-health/home/',
    authUrl: 'https://auth.uat.bestegg.com/auth-identity-service/api/v1/cognito/login',
    redirectUrl: 'https://www.uat.bestegg.com/financial-health/rf/',
  },
  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/commands.js",
    baseUrl: "https://twig.uat.bestegg.com/",
    viewportWidth:1200,
    setupNodeEvents,
  },
});

// projectId: "zubidk"
