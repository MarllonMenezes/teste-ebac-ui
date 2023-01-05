context('Funcionalidade Login', () => {
    it('Login com sucesso', () => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') // Acessa a página de login
     cy.get('#username').type('aluno_ebac@teste.com') // Digita o usuário
     cy.get('#password').type('teste@teste.com') // Digita a senha
     cy.get('.woocommerce-form > .button').click() // Clica no botão de login
     cy.get('.page-title').should('contain', 'Minha conta') // Verifica se o usuário está logado 
     
     
    })

    it('deve exibir mensagem de erro ao inserir usuário inválido', () => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') // Acessa a página de login
     cy.get('#username').type('alu@teste.com') // Digita o usuário
     cy.get('#password').type('teste@teste.com') // Digita a senha
     cy.get('.woocommerce-form > .button').click() // Clica no botão de login
     cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido') // Verifica se o usuário está logado
     
    
    })

    it('deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') // Acessa a página de login
        cy.get('#username').type('aluno_ebac@teste.com') // Digita o usuário
        cy.get('#password').type('test@teste.com') // Digita a senha
        cy.get('.woocommerce-form > .button').click() // Clica no botão de login
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail') // Verifica se o usuário está logado
        
       
       })

})