
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Henrique')
    cy.get('#signup-email').type('fabioh@teste.com')
    cy.get('#signup-phone').type('62985102020')
    cy.get('#signup-password').type('Fabio123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')

  })
})