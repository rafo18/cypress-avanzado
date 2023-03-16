const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");
const webpack = require('@cypress/webpack-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
  // implement node event listeners here

  // addMatchImageSnapshotPlugin(on,config)

  config.env.variable = process.env.NODE_ENV ?? 'NO HAY VARIABLE '
  await preprocessor.addCucumberPreprocessorPlugin(on,config)
  on(
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
  
  return config;
}



module.exports = defineConfig({
  e2e: {
    baseUrl:"https://pokedexpokemon.netlify.app/",
    
    retries: 2,
    setupNodeEvents,
    env: {
      credentials: {
        user: "username",
        password: 'password',
      },
    },
    specPattern: "**/*.feature",
  },
});



///

const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");





module.exports = defineConfig({
  e2e: {
    baseUrl:"https://pokedexpokemon.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // addMatchImageSnapshotPlugin(on,config)

      config.env.variable = process.env.NODE_ENV ?? 'NO HAY VARIABLE '
      return config;
    },
    // retries: 2,

    env: {
      credentials: {
        user: "username",
        password: 'password',
      },
    },
  },
});
