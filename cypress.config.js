module.exports = {
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false, // 👈 Adicionado para desabilitar o arquivo de suporte
  },
};