const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-app.dev.turbotenant.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
