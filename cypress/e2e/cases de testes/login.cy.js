describe("Funcionalidade Login", () => {
  
    it.only("Login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta");
    cy.get("#username").type("1aluno@teste.com"); // Digita o usuário
    cy.get("#password").type("@Alunoteste123"); // Digita a senha
    cy.get(".woocommerce-form > .button").click(); // Clica no botão de login
  });
});

it("deve exibir mensagem de erro ao inserir usuário inválido", () => {
  cy.visit("http://lojaebac.ebaconline.art.br/minha-conta");
  cy.get("#username").type("1aluno@teste.com"); // Digita o usuário
  cy.get("#password").type("@Alunoteste123"); // Digita a senha
  cy.get(".woocommerce-form > .button").click(); // Clica no botão de login
  cy.get(".woocommerce-error").should(
    "contain",
    "Endereço de e-mail desconhecido"
  ); // Verifica se o usuário está logado
});

it("deve exibir mensagem de erro ao inserir senha inválida", () => {
  cy.visit("http://lojaebac.ebaconline.art.br/minha-conta");
  cy.get("#username").type("1aluno@teste.com"); // Digita o usuário
  cy.get("#password").type("@Alunoteste123"); // Digita a senha
  cy.get(".woocommerce-form > .button").click(); // Clica no botão de login
  cy.get(".woocommerce-error").should("contain","Erro: a senha fornecida para o e-mail"); // Verifica se o usuário está logado
});
