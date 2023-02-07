//const fs = require("fs-extra");
//const path = require("path");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");
const jwtDecode = require("jwt-decode");
const MailosaurClient = require('mailosaur');
const uuid = require('uuid');
require('dotenv').config();
const generator = require('generate-password')

//function getConfigurationByFile(file) {
  //const pathToConfigFile = path.resolve("..", "config", `${file}.json`);

  //return fs.readJson(pathToConfigFile);
//}

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require("cypress-localstorage-commands/plugin")(on, config),
  on("file:preprocessor", browserify.default(config));
  on("file:preprocessor", createBundler({plugins: [createEsbuildPlugin.default(config)],}));
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  on('task', {
    getCid(res) {
      const token = jwtDecode(res)
      return token["cid"]

    },
    async getConfirmationCode(email) {
      const testStart = new Date(Date.now() - 10000)
      const apiKey = 'DPFIQQW8OXFAqL0g'
      const serverId = 'zpcr9khc'
      const mailosaur = new MailosaurClient(apiKey)
      const criteria = {
        sentTo: email,
      }
      const message = await mailosaur.messages.get(serverId, criteria, {
        receivedAfter: testStart
      })
      const code = message.html.codes[0].value;
      return code
    },
    generatePassword() {
      const password = generator.generate({
        length:10,
        numbers: true,
        symbols: true,
        strict: true
      })
      return password
    }
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    loginUrl: 'https://twig.sbx.bestegg.com/financial-health/auth/login/?next=/financial-health/home/',
    authUrl: 'https://auth.sbx.bestegg.com/auth-identity-service/api/v1/cognito/login',
    redirectUrl: 'https://www.sbx.bestegg.com/financial-health/rf/',
    authTokenUrl: process.env.AUTH_IDENTITY_TOKEN_ENDPOINT,
    authClientId: process.env.AUTH_IDENTITY_CLIENT_ID,
    authClientSecret: process.env.AUTH_IDENTITY_CLIENT_SECRET,
    baseUrl: process.env.UAT_BASE_URL,
    xsrfToken: "1c2e59c3-c6b4-4140-9d76-9fd72c0d5d7d",
    testPassword: 'n8NhV1l1vJT4^^'
  },
  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/commands.js",
    chromeWebSecurity: false,
    baseUrl: "https://twig.sbx.bestegg.com/financial-health",
    setupNodeEvents,
    redirectionLimit: 35,
  },
  retries: {
    runMode: 3,
    openMode: 3
  }
});

// projectId: "zubidk"