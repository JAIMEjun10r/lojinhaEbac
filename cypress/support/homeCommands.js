Cypress.Commands.add('exibicaoBlogMenus', () => {
    cy.get('#menu-item-199 > a').should('have.text', 'Blog Grid')
    cy.get('#menu-item-198 > a').should('have.text', 'Blog Lists')
    cy.get('#menu-item-623 > a').should('have.text', 'Single Post')
    cy.get('#menu-item-197 > a').should('have.text', 'Blog With Sidebar')
     
})

Cypress.Commands.add('exibicaoMenus', () => {
    cy.get('.collapse > ul > li').should('have.length', 5)
      //treinando com xpath
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