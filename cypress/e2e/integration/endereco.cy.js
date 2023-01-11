import enderecoPage from "../../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login('1aluno@teste.com','@Alunoteste123')//login
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        //cadastro de endereço
    }); 
});