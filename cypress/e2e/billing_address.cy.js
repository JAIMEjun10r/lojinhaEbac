const { faker } = require('@faker-js/faker/locale/pt_BR');
const enderecos = require('../fixtures/enderecos.json')


describe('Testando a página de endereço', () => {
  beforeEach(() => {
    cy.session('sessao', () => {
      cy.visit('/minha-conta')
      cy.get('#username').type(Cypress.env('email'))
      cy.get('#password').type(Cypress.env('senha'))
      cy.get('[name="login"]').click()

    })
  })

  context('Cadastrando endereço', () => {
    it('Cadastrando um endereço com todos os dados corretos', () => {
      cy.visit('/minha-conta')
      cy.step('Clicando em Endereço')
      cy.contains('a', 'Endereços').click()
      cy.contains('h3', 'Billing Address')
        .should('be.visible')
      cy.xpath("//a[@href='http://lojaebac.ebaconline.art.br/minha-conta/edit-address/faturamento/'][contains(.,'Edit')]")
        .click()
      cy.contains('h3', 'Endereço de faturamento')
        .should('be.visible')
      cy.cadastroEndereco(
        faker.name.firstName(), faker.name.lastName(), 'Brasil{enter}',
        faker.address.streetName(), faker.address.city()

      )

    });

    it('Cadastrando Endereço', () => {
        cy.fixture('enderecos').then((dados) => {
        cy.visit('/minha-conta')
        cy.step('Clicando em Endereço')
        cy.contains('a', 'Endereços').click()
        cy.contains('h3', 'Billing Address')
          .should('be.visible')
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.contains('h3', 'Endereço de faturamento')
          .should('be.visible')
        cy.cadastroEndereco(dados[0].nome, dados[0].sobrenome, dados[0].país,
        dados[0].endereco, dados[0].complemento, dados[0].cidade, dados[0].estado,
        dados[0].cep, dados[0].telefone)
        cy.get('.button').click()
        
      })
      


    });

      
  });
});