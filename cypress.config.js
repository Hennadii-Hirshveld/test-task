module.exports = {
  viewportWidth: 1024,
  viewportHeight: 920,
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  video: true,
  screenshotOnRunFailure: true,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  reporter: 'mochawesome',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: true,
      html: true,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
}
