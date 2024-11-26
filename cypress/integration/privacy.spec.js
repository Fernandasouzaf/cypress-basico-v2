//como ele apresentou a solução
it.only('testa a página da política de privacidade de forma independente', function() {
       cy.visit ('./src/privacy.html')   
      cy.contains ('Talking About Testing').should('be.visible')
})

    




//como eu fiz
 //   it.only('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
 //       cy.visit ('./src/index.html')   
 //      cy.get('#privacy a')
 //       .invoke('removeAttr', 'target')
 //       .click()
   //       }) 
     //     it('testa a página da política de privacidade de forma independente', function (){
       //     cy.contains ('Talking About Testing').should('be.visible')          
        //})
    