const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'mzsemf',
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
