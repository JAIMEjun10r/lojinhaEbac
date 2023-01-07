const { faker } = require('@faker-js/faker');

const randomName = faker.name.fullName(); 
const randomEmail = faker.internet.email()
const fakeName = faker.name.firstName()
describe('Testando as funcionalidades da página Minha Conta', () => {
  beforeEach(() => {
    cy.visit('/minha-conta')
    cy.title()
      .should('eq', 'Minha conta – EBAC – Shop')
  })
context('Menus', () => {
  it('Averiguando se os menus estão aparecendo', () => {
    cy.get('.collapse > ul > li').should('have.length', 5)
    cy.contains('Home')
      // .should('be.visible')
    cy.contains('Comprar')
      .should('be.visible')
    cy.contains('Blog')
      .should('be.visible')
    cy.contains('Categorias')
      .should('be.visible')
    cy.contains('Mais vendidos')
      .should('be.visible')
  })
});
context('Login', () => {
  it.only('Testando armazenamento de nome na mensagem', () => {
    cy.get('#username').type('a').then(($texto) => {
      const text = $texto.text()
      
    cy.get('#password').type('ab')
    
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should(($erro) => {
      expect($erro.text()).to.eq(`\n\t\t\tErro: a senha informada para o usuário ${text} está incorreta. Perdeu a senha?\t\t`)
      
    })
  })
      

  });
});
  
})