const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("..", "config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

// plugins file
module.exports = {
  ...(on, config) => {
    // accept a configFile value or use development by default
    const file = config.env.configFile || "local";

    return getConfigurationByFile(file);
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
// projectId: "zubidk"
