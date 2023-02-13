import spok from 'cy-spok'

describe('Testando as funcionalidades da página Home', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'EBAC – Shop – Página de teste')
    cy.get('.logo').find('img').should('have.attr', 'src', 'http://lojaebac.ebaconline.art.br/wp-content/uploads/2021/06/logopqn_1.png')
            
  });
  context('Menus', () => {
    it('Testando a aparição dos menus', () => {
      cy.exibicaoMenus()
    
    });
    
    it('Clicando no menu Comprar', () => {
      cy.contains('Comprar').click({force: true})
      cy.url().should('eq', 'http://lojaebac.ebaconline.art.br/produtos/')
      cy.contains('h1', 'Produtos').should('be.visible')
    });
    it('Passando o mouse sobre o menu Home', () => {
      cy.contains('Home').realHover()
      cy.get('.dropdown-menu > li > a').should('have.length.at.least', 11)
    });
    
    it('Passando o mouse sobre o menu Blog', () => {
      // cy.contains('a', 'Blog').realHover()
      cy.get('#primary-menu > .menu-item-196 > .dropdown-toggle').realHover()
      cy.exibicaoBlogMenus()
    });

    
    it('Clicando no menu Blog Grid', () => {
      cy.get('#primary-menu > .menu-item-196 > .dropdown-toggle').realHover()
      cy.get('#menu-item-199 > a').click({force: true})
      cy.contains('h1', 'Blog Grid').should('be.visible')
    });

    it('Clicando no menu Blog Lists', () => {
      cy.get('#primary-menu > .menu-item-196 > .dropdown-toggle').realHover()
      cy.get('#menu-item-198 > a').click({force: true})
      cy.contains('h1', 'Blog Lists').should('be.visible')
    });

    it('Clicando no menu Single Post', () => {
      cy.get('#primary-menu > .menu-item-196 > .dropdown-toggle').realHover()
      cy.get('#menu-item-623 > a').click({force: true})
      cy.contains('h1', 'Donec laoreet massa varius elit ullamco').should('be.visible')
    });

    it('Clicando no menu Blog With Sidebar', () => {
      cy.get('#primary-menu > .menu-item-196 > .dropdown-toggle').realHover()
      cy.get('#menu-item-197 > a').click({force: true})
    });

    it('Confirmando os menus principais usando cy.map e spok', () => {
      cy.get('#primary-menu > li')
      .map('innerText')
      .should(spok(['HOME ', 'COMPRAR', 'BLOG \nBlog Grid\nBlog Lists\nSingle Post\nBlog With Sidebar', 'CATEGORIAS', 'MAIS VENDIDOS'], { timeout: 8000}))
      
    });

    it('Confirmando os menus principais usando somente cy.map', () => {
      cy.get('#primary-menu > li')
        .map('innerText')
        .should('deep.equal', ['HOME ', 'COMPRAR', 'BLOG \nBlog Grid\nBlog Lists\nSingle Post\nBlog With Sidebar', 'CATEGORIAS', 'MAIS VENDIDOS'], { timeout: 8000})
    });

  });
    
});