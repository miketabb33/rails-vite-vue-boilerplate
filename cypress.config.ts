import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5017',
    defaultCommandTimeout: 10_000,
    supportFile: 'cypress/support/index.ts',
    viewportWidth: 1440,
    viewportHeight: 900,
  },
})
