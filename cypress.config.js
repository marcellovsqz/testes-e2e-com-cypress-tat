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
    defaultCommandTimeout: 10000
  },
})
c504e0ad-3565-40ce-99da-23aa7946f4a7