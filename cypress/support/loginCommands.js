Cypress.Commands.add('login', (email, senha) => {
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

Cypress.Commands.add('exibicaoMenus', () => {
    cy.get('.collapse > ul > li').should('have.length', 5)
      //cy.contains não foi conseguiu checar, entao estou usando o xpath
      cy.xpath("(//a[contains(.,'Home')])[14]").should('be.visible')
        .and('have.text', 'Home ')
      cy.xpath("(//a[contains(.,'Comprar')])[2]").should('be.visible')
        .and('have.text', 'Comprar')
      cy.xpath("(//a[contains(.,'Blog')])[5]").should('be.visible')
        .and('have.text', 'Blog ')
      cy.xpath("(//a[contains(.,'Categorias')])[2]").should('be.visible')
        .and('have.text', 'Categorias')
      cy.xpath("(//a[contains(.,'Mais vendidos')])[2]").should('be.visible')
        .and('have.text', 'Mais vendidos')
})