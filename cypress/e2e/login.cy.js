const { faker } = require('@faker-js/faker/locale/pt_BR');
const perfil = require('../fixtures/perfil.json')



describe('Testando as funcionalidades da página Minha Conta', function () {
  beforeEach(() => {
    cy.visit('/minha-conta')
    cy.title()
      .should('eq', 'Minha conta – EBAC – Shop')
    cy.contains('Minha conta')
    cy.contains('Login')
    
  })
  context('Menus', () => {
    it('Averiguando se os menus estão aparecendo', function () {
      cy.exibicaoMenus()

    })
  
  });
  context('Login', function () {
    it('Criando um usuário', () => {
      cy.contains('Sign up').click()
      cy.contains('Register').should('be.visible')
      cy.regEmailSenha(faker.internet.email(), faker.internet.password())

    });

    it.only('Logando com email  e senha corretos', function () {
      cy.fixture('perfil').then((dados) => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.get('.woocommerce-MyAccount-content > p')
          .should('contain', 'Olá, marli_macedo (não é marli_macedo? Sair)')
        cy.get('.page-title').should('be.visible')

      })
    })
    it('Tentativa de login com email inválido e senha incorreta', function () {
      cy.fixture('perfil').then((dados) => {
        cy.login(dados.emailInvalido, dados.senha)
        cy.get('.woocommerce-error > li').should('be.visible')
          .and('have.text', '\n\t\t\tEndereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.\t\t')
      })
    });
    it('Tentativa de login com email válido e senha incorreta', function () {
      cy.fixture('perfil').then((dados) => {
        cy.login(dados.emailValido, dados.senha)
        cy.get('.woocommerce-error > li').should('be.visible')
          .and('have.text', '\n\t\t\tEndereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.\t\t')
      })
    });
    it('Tentativa de login só digitando o campo senha', function () {
      cy.fixture('perfil').then((dados) => {
        cy.contains('a', 'Login').click()
        cy.get('#password').type(dados.senha, { log: false })
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').should('be.visible')
          .and('have.text', '\n\t\t\tErro: Nome de usuário é obrigatório.\t\t')
      })

    });
    it('Tentativa de login sem digitar nada', function () {
      cy.contains('a', 'Login').click()
      cy.get('[name="login"]').click()
      cy.get('.woocommerce-error > li').should('be.visible')
        .and('have.text', '\n\t\t\tErro: Nome de usuário é obrigatório.\t\t')
    });
    it('Tentativa de login só digitando o campo username/email', function () {
      cy.fixture('perfil').then((dados) => {
        cy.contains('a', 'Login').click()
        cy.get('#username').type(dados.emailValido)
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').should('be.visible')
          .and('have.text', '\n\t\t\tErro: o campo da senha está vazio.\t\t')
      })

    });
    
  })
})

