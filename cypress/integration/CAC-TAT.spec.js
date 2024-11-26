/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
   beforeEach(function() {
      cy.visit ('./src/index.html')   
   })

   it('verifica o título da aplicação', function() {
         cy.title().should ('be.equal','Central de Atendimento ao Cliente TAT' )
   })

   it('preenche os campos obrigatórios e envia o formulário', function() {
      const longText = 'Teste Fer Automação, Teste Fer Automação, Teste Fer Automação, Teste Fer Automação, Teste Fer Automação, Teste Fer Automação, Teste Fer Automação, Teste Fer Automação'
      cy.get('#firstName').type('Fernanda')
      cy.get('#lastName').type('Souza de Freitas')
      cy.get('#email').type('fernanda-souza-freitas@hotmail.com')
      cy.get('#open-text-area').type(longText, {delay: 0 })    
      cy.contains('button', 'Enviar').click()
      cy.get('.success').should ('be.visible')
 })
   it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
      cy.get('#firstName').type('Fernanda')
      cy.get('#lastName').type('Souza de Freitas')
      cy.get('#email').type('fernanda-souza-freitas@hotmail;com')
      cy.get('#open-text-area').type('Teste')   
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should ('be.visible')

})
it('Verificação de telefone', function() {
   cy.get('#phone')
   .type('abcxzcv')
   .should ('have.value', '')
})
it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
   cy.get('#firstName').type('Fernanda')
   cy.get('#lastName').type('Souza de Freitas')
   cy.get('#email').type('fernanda-souza-freitas@hotmail.com')
   cy.get('#phone-checkbox').click()
   cy.get('#open-text-area').type('Teste')   
   cy.contains('button', 'Enviar').click()
   cy.get('.error').should ('be.visible')
})
it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
   cy.get('#firstName')
   .type('Fernanda')
   .should('have.value', 'Fernanda')
   .clear()
   .should('have.value', '')
   cy.get('#lastName')
   .type('Souza de Freitas')
   .should('have.value', 'Souza de Freitas')
   .clear()
   .should('have.value', '')
   cy.get('#email')
   .type('fernanda-souza-freitas@hotmail.com')
   .should('have.value', 'fernanda-souza-freitas@hotmail.com')
   .clear()
   .should('have.value', '')
   cy.get('#phone')
   .type('51995921043')
   .should('have.value', '51995921043')
   .clear()
   .should('have.value', '')
})
it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should ('be.visible')
})
it('envia o formuário com sucesso usando um comando customizado', function() {
   cy.fillMandatoryFieldsAndSubmit ()
   cy.get('.success').should ('be.visible')
})
it('seleciona um produto (YouTube) por seu texto', function() {
   cy.get('#product').select('YouTube') 
   .should('have.value', 'youtube')
   //cy.get('#product').click()
   //cy.get('select').select('Youtube') 
   //.should('have.value', 'Youtube')
})
it('seleciona um produto (Mentoria) por seu valor (value)', function() {
   cy.get('#product').select('mentoria') 
   .should('have.value', 'mentoria')
})

it('seleciona um produto (Blog) por seu índice', function() {
   cy.get('#product')
   .select(1) 
   .should('have.value', 'blog')
})
it('marca o tipo de atendimento "Feedback"', function() {
cy.get('input[type="radio"][value="feedback"]')
.check()
.should('have.value', 'feedback')  
})
it('marca cada tipo de atendimento"', function() {
   cy.get('input[type="radio"][value="ajuda"]')
   .check()
   .should('have.value', 'ajuda')
})
it('marca cada tipo de atendimento"', function() {
   cy.get('input[type="radio"][value="elogio"]')
   .check()
   .should('have.value', 'elogio')
})
//como foi feito no exercicio
//it.only('marca cada tipo de atendimento', function() {
//   cy.get('input[type="radio"]')
//     .should('have.length', 3)
//     .each(function($radio) {
//      cy.wrap($radio).check()
//     cy.wrap($radio).should('be.checked')
//     })
it('marca ambos checkboxes, depois desmarca o último"', function() {
    cy.get('input[type="checkbox"]')
    .check()
    .should ('be.checked')
    //ou usar .last() 
    cy.get('#phone-checkbox').uncheck()
    .should ('not.be.checked')
})
it('REVISÂO - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
 cy.get('#firstName').type('Fernanda')
   cy.get('#lastName').type('Souza de Freitas')
   cy.get('#email').type('fernanda-souza-freitas@hotmail.com')
   cy.get('#phone-checkbox').check()
   cy.get('#open-text-area').type('Teste')   
   cy.contains('button', 'Enviar').click()
   cy.get('.error').should ('be.visible')

})

it('seleciona um arquivo da pasta fixtures', function() {
   cy.get('#file-upload')
   .selectFile('./cypress/fixtures/example.json')
   //.should('have.value', 'C:\\fakepath\\example.json');//
    .should(function($input) {
   expect($input[0].files[0].name).to.equal('example.json')
    })
})
it('seleciona um arquivo simulando um drag-and-drop', function() {
   cy.get('#file-upload')
   .should ('not.have.value')
   .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
   .should(function($input) {
      expect($input[0].files[0].name).to.equal('example.json')
    })
})
it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
   cy.fixture('example.json').as('samplefile')
   cy.get('#file-upload')
   .selectFile('@samplefile')
   .should(function($input) {
      expect($input[0].files[0].name).to.equal('example.json')
    })
   })

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
   cy.get('#privacy a').should('have.attr', 'target', '_blank')
   .click()
    })


it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
     cy.get('#privacy a')
     .invoke('removeAttr', 'target')
     .click()
       })
})      
