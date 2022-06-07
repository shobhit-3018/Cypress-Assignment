describe('Login Test Cases', function () {
  beforeEach(()=> {
    cy.visit("https://staging.trinetx.com/legacy-login");     
      cy.wait(5000)
  })
  it('Test-1: Login with Valid Credentials, should pass', function () {     
      cy.get('input[name="username"]').type('shobhit.kumar1@rsystems.com')
      cy.get('input[name="password"]').type('1q2w3e4r5t6y#$A')
      cy.get('.button__LegacyButton-hxTgdf').click()
      cy.get('[data-cy=subnav-main-content]').should('contain','My Studies')
  })
  it('Test-2: Login with invalid Credentials, should fail', function () {     
    cy.get('input[name="username"]').type('sytemsjdfsf@rsystems.com')
    cy.get('input[name="password"]').type('1dwegvhytr')
    cy.get('.button__LegacyButton-hxTgdf').click()
    cy.get('[data-cy=error-notification]').should('contain','You have entered an invalid username/password combination. After 5 unsuccessful attempts, the account will be locked.')
  })
  it.only('Test-3: Login with blank username and Valid password, should fail', function () {     
    cy.get('input[name="username"]').type(' ')
    cy.get('input[name="password"]').type('1q2w3e4r5t6y#$A')
    cy.get('.button__LegacyButton-hxTgdf').click()
    cy.get('[data-cy=error-notification]').should('contain','You have entered an invalid username/password combination. After 5 unsuccessful attempts, the account will be locked.')
  })
})

