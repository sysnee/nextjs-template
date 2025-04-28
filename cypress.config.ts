import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false, // Necessário para testes com Auth0
    experimentalModifyObstructiveThirdPartyCode: true // Substitui experimentalSessionAndOrigin
  },
});
