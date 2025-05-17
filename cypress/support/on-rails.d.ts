/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    appCommands(body: Record<string, any>): Cypress.Chainable<any>
    app(name: string, command_options?: Record<string, any>): Cypress.Chainable<any>
    appScenario(name: string, options: Record<string, any>): Cypress.Chainable<any>
    appEval(code: string): Cypress.Chainable<any>
    appFactories(options: Record<string, any>): Cypress.Chainable<any>
    appFixtures(options: Record<string, any>): void
  }
}
