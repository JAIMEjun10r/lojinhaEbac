Cypress.Commands.add('cadastroEndereco', (nome, sobrenome, pais, endereco, cidade, estado, cep) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#select2-billing_country-container').type(pais)
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city_field > label').type(cidade)
    cy.get('#select2-billing_state-container').type(estado)
    cy.get('#billing_postcode').type(cep)
})

Cypress.Commands.add('teste',() => {
    
})