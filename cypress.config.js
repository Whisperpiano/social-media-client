const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD

      return config
    },
  },
})
