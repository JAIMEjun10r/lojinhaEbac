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
    // it('Clicando no menu Home', () => {
    //   cy.xpath("(//a[contains(.,'Home')])[14]").click()
    //   cy.url().should('eq', 'http://lojaebac.ebaconline.art.br/home/')
            
    // });
    it('Clicando no menu Comprar', () => {
      cy.xpath("(//a[contains(.,'Comprar')])[2]").click()
      cy.url().should('eq', 'http://lojaebac.ebaconline.art.br/produtos/')
      cy.contains('h1', 'Produtos').should('be.visible')
    });
    it('Passando o mouse sobre o menu Home', () => {
      cy.xpath("(//a[contains(.,'Home')])[14]").realHover()
      cy.get('.dropdown-toggle > ul > li > a').should('have.length', 11)
    });

  });
    
});