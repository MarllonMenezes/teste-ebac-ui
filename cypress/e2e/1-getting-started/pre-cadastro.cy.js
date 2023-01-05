import { faker } from '@faker-js/faker';



describe('Funcionalidade pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') // Acessa a página de login
    });

 it('deve completar o cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email()) // Digita o email
    cy.get('#reg_password').type ('@Aa123456')// Digita a senha
    cy.get(':nth-child(4) > .button').click()  // Clica no botão de login
   
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click() // Clica no botão de detalhes da conta
    cy.get('#account_first_name').type('Teste') // Digita o nome
    cy.get('#account_last_name').type('Aluno') // Digita o sobrenome
    cy.get('#account_display_name').type('Teste Aluno001') // Digita o nome de exibição
    cy.get('.woocommerce-Button').click() // Clica no botão de salvar
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso') // Verifica se o usuário está logado


});

});