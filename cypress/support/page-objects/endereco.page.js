class EnderecoPage{

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click();
        cy.get(':nth-child(1) > .title > .edit').click();

        cy.get('#billing_first_name').clear().type('Alunão')
        cy.get('#billing_last_name').clear().type('Da Silva')
        cy.get('#billing_company').clear().type('Ebac')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Rua oito')
        cy.get('#billing_city').clear().type('Rio de janeiro')
        cy.get('#select2-billing_state-container').click().type('rio').get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type('21061-020')
        cy.get('#billing_phone').clear().type('1199999999')
        cy.get('.button').click()
        //elementos + ações
    }

    editarEnderecoEntrega() {
        //elementos + ações
    }

}

export default new EnderecoPage ()