describe('Home Page', () => {
  it('loads successfully', () => {
    cy.visit('/')
    cy.contains('Hello, man!')
  })

  // it('can use Rails DB setup', () => {
  //   cy.app('clean') // call Rails helper to clean DB
  //   cy.appFactories([
  //     ['create', 'user', { name: 'TestUser' }]
  //   ])
  //   cy.visit('/users')
  //   cy.contains('TestUser')
  // })
})
