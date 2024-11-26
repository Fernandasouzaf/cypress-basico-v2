describe('Efetuar compra - Expresso + Expresso Macchiato', function () {
    it('Passo a Passo', function () {
        cy.visit('https://coffee-cart.app/')
        cy.get('div[data-test="Espresso"]').click()
        cy.contains('button', 'Total: $10.00').should('be.visible')
        cy.get('div[data-test="Espresso_Macchiato"]').click()
        cy.contains('button', 'Total: $22.00').should('be.visible')
        cy.get('button[data-test="checkout"]').click()
        cy.get('input[id="name"]').type('Teste Automatizado')
        cy.get('input[id="email"]').type('teste.automatizado@email.com.br')
        cy.get('#promotion').check()
        cy.get('#submit-payment').click()
        cy.contains('Thanks for your purchase. Please check your email for payment.').should('be.visible')
        cy.contains('button', 'Total: $0.00').should('be.visible')
    })

})