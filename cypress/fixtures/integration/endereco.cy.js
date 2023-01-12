import enderecoPage from "../../support/page-objects/endereco.page";
import dadosEndereco from '../'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login('1aluno@teste.com','@Alunoteste123')//login
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        //cadastro de endereço
    }); 

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de massa de dados', () => {
        enderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome, dadosEndereco[1].sobrenome,dadosEndereco[1])
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        //cadastro de endereço
    }); 
});