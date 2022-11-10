const { defineConfig } = require("cypress");

const {setupNodeEvents} = require("./base.config");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/commands.js",
    baseUrl: "http://0.0.0.0:8000/",
    setupNodeEvents,
  },
});

// projectId: "zubidk"
