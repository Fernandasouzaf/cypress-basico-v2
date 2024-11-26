Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Fernanda')
    cy.get('#lastName').type('Souza de Freitas')
    cy.get('#email').type('fernanda-souza-freitas@hotmail.com')
    cy.get('#open-text-area').type('Teste')    
    cy.contains('button', 'Enviar').click()
})