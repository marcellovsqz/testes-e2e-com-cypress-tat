const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '3efx9i',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    requestTimeout: 15000,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
})
