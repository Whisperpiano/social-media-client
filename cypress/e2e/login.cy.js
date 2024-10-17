describe('Login', () => {
  beforeEach(() => {
    cy.visitHome()
  })

  it('shows a register form', () => {
    cy.showsRegisterForm()
    cy.isNotLoggedIn()
  })

  it('shows a login form when click the login button', () => {
    cy.showsRegisterForm()
    cy.showsLoginForm()
  })

  it('shows a login form, and allows a registered user to login', () => {
    cy.showsRegisterForm()
    cy.showsLoginForm()
    cy.isNotLoggedIn()
    cy.loginWithTestUser()
    cy.isLoggedIn()
  })

  it('allows a registered user to logout', () => {
    cy.showsRegisterForm()
    cy.showsLoginForm()
    cy.isNotLoggedIn()
    cy.loginWithTestUser()
    cy.isLoggedIn()
    cy.logout()
    cy.isNotLoggedIn()
  })

  it('shows an error message when the user enters an invalid email or password', () => {
    cy.intercept(
      'POST',
      'https://nf-api.onrender.com/api/v1/social/auth/login',
      {
        statusCode: 401,
      }
    ).as('login')
    cy.showsRegisterForm()
    cy.showsLoginForm()
    cy.isNotLoggedIn()
    cy.login('invalid@stud.noroff.no', 'invalidpassword')
    cy.wait('@login').its('response.statusCode').should('eq', 401)
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Either your username was not found or your password is incorrect'
      )
    })
    cy.isNotLoggedIn()
  })
})
