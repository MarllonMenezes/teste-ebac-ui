describe("Funcionalidade página de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos/"); // Acessa a página de login
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]')
           // .eq(3)
            .contains('Aero Daily Fitness Tee')
            .click(); // Clica no produto
  });

    it.only("Deve selecionar um produto ao carrinho", () => {      
       let quantidade = 4;
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt')
            .click(); // Clica no produto
        cy.get('.button-variable-item-S').click();
        cy.get('.button-variable-item-Green').click();
        cy.get('.input-text').clear() .type(quantidade);
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.');
        

    });

});


