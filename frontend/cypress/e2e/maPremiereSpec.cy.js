describe('template spec', () => {
  it('ça se rend sur la page services', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Services").click()
  })
})
it('consulte un service', () => {
  cy.visit('http://localhost:3000')
  cy.contains("Services").click()
  cy.contains("En savoir plus").click()
  cy.url().should("eq", 'http://localhost:3000/service/2')
})