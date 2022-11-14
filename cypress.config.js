//const fs = require("fs-extra");
//const path = require("path");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");
const jwtDecode = require("jwt-decode");

//function getConfigurationByFile(file) {
  //const pathToConfigFile = path.resolve("..", "config", `${file}.json`);

  //return fs.readJson(pathToConfigFile);
//}

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

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
    }
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    loginUrl: 'https://twig.uat.bestegg.com/financial-health/auth/login/?next=/financial-health/home/',
    authUrl: 'https://auth.uat.bestegg.com/auth-identity-service/api/v1/cognito/login',
    redirectUrl: 'https://www.uat.bestegg.com/financial-health/rf/',
  },
  e2e: {
    specPattern: "**/*.feature",
    supportFile: "cypress/support/commands.js",
    chromeWebSecurity: false,
    baseUrl: "https://auth.uat.bestegg.com/login",
    setupNodeEvents,
  },
});

// projectId: "zubidk"