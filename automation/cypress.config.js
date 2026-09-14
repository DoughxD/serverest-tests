module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false, // 👈 resolve o erro de vez
    baseUrl: "https://front.serverest.dev/",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
};