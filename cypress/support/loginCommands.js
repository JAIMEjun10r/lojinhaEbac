Cypress.Commands.add('login', (email, senha) => {
    
        cy.visit('/minha-conta')
        cy.contains('a', 'Login').click()
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('[name="login"]').click()

})

Cypress.Commands.add('regEmailSenha', (email, senha) => {
    cy.get('#reg_email').type(email)
      cy.get('#reg_password').type(senha)
      cy.get('[name="register"]').click()
      cy.get('.woocommerce-MyAccount-content > p')
        .should('contain', 'Olá, ')
})

