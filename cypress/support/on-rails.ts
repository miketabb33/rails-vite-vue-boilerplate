Cypress.Commands.add('appCommands', (body: Record<string, any>): Cypress.Chainable<any> => {
  Object.keys(body).forEach(key => {
    if (body[key] === undefined) {
      delete body[key]
    }
  })

  const log = Cypress.log({ name: 'APP', message: body, autoEnd: false })

  return cy
    .request({
      method: 'POST',
      url: '/__e2e__/command',
      body: JSON.stringify(body),
      log: false,
      failOnStatusCode: false,
    })
    .then(response => {
      log.end()
      if (response.status !== 201) {
        expect(response.body.message).to.equal('')
        expect(response.status).to.equal(201)
      }
      return response.body
    })
})

Cypress.Commands.add(
  'app',
  (name: string, command_options?: Record<string, any>): Cypress.Chainable<any> => {
    return cy.appCommands({ name, options: command_options }).then((body: any[]) => {
      return body[0]
    })
  }
)

Cypress.Commands.add(
  'appScenario',
  (name: string, options: Record<string, any> = {}): Cypress.Chainable<any> => {
    return cy.app('scenarios/' + name, options)
  }
)

Cypress.Commands.add('appEval', (code: string): Cypress.Chainable<any> => {
  return cy.app('eval', { code })
})

Cypress.Commands.add('appFactories', (options: Record<string, any>): Cypress.Chainable<any> => {
  return cy.app('factory_bot', options)
})

Cypress.Commands.add('appFixtures', (options: Record<string, any>): void => {
  cy.app('activerecord_fixtures', options)
})
// CypressOnRails: end

// The next is optional
// beforeEach(() => {
//  cy.app('clean') // have a look at cypress/app_commands/clean.rb
// });

// comment this out if you do not want to attempt to log additional info on test fail
Cypress.on('fail', (err, runnable) => {
  // allow app to generate additional logging data
  Cypress.$.ajax({
    url: '/__e2e__/command',
    data: JSON.stringify({
      name: 'log_fail',
      options: { error_message: err.message, runnable_full_title: runnable.fullTitle() },
    }),
    async: false,
    method: 'POST',
  })

  throw err
})
