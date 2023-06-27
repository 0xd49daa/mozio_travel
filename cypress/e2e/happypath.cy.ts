describe('happy path', () => {
  it('full flow', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid=city-autocomplete]').eq(0).click().type('Pa')
    cy.get('[data-testid=city-autocomplete-option]').eq(0).click()

    cy.get('[data-testid=city-autocomplete]').eq(1).click().type('Tou')
    cy.get('[data-testid=city-autocomplete-option]').eq(0).click()

    cy.get('[data-testid=passenger-up-button]').click().click().click()
    cy.get('[data-testid=passenger-down-button]').click()

    cy.get('[data-testid=submit-button]').click()

    cy.get('[data-testid=final-result]').should('contain', '588.80 km')
    cy.get('[data-testid=final-result]').should('contain', '3 passengers')
  })
})