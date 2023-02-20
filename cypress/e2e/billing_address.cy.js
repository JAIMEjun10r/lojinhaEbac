const { faker } = require('@faker-js/faker/locale/pt_BR');
var faker = require('faker-br')

describe('Testando a página de endereço', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.title()
          .should('eq', 'Minha conta – EBAC – Shop')
        cy.contains('Minha conta')
        cy.contains('Login')
        
      })

      context('Cadastrando endereço', () => {
        it('Cadastrando um endereço com todos os dados corretos', () => {
            cy.login(Cypress.env('email'), Cypress.env('senha')) 
            cy.contains('a', 'Endereços').click()
            cy.contains('h3', 'Billing Address')
                .should('be.visible')
            cy.xpath("//a[@href='http://lojaebac.ebaconline.art.br/minha-conta/edit-address/faturamento/'][contains(.,'Edit')]")
                    .click()
            cy.contains('h3', 'Endereço de faturamento')
                .should('be.visible')
            cy.cadastroEndereco(
                faker.name.firstName(), faker.name.lastName(), 'Brasil{enter}',
                faker.address.streetName(), faker.address.city(), faker.cep(),
                faker.address.zipCode()
            )
          
        });
      });
});