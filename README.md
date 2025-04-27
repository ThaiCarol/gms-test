#Teste de Cadastro de Membros - Golden Movie Studio

📋 Descrição

Este projeto contém o teste automatizado da funcionalidade de Cadastro de Membros do site Golden Movie Studio.
O teste foi desenvolvido utilizando Cypress para validar o preenchimento dos campos obrigatórios e a confirmação de cadastro bem-sucedido.

🚀 Funcionalidade Testada

Funcionalidade: Cadastro de novos membros no sistema.
História de usuário: US-012

🧪 Cenário de Teste

Cenário: Cadastro de um membro preenchendo todos os campos obrigatórios.

Acessar a página de cadastro.
Preencher os seguintes campos obrigatórios:
Nome
Sobrenome
E-mail
Telefone
Senha
Clicar no botão de cadastro.
Verificar se a mensagem de sucesso é exibida.
🛠 Tecnologias Utilizadas

✅ Critério de Aceitação

Mensagem "Cadastro realizado com sucesso!" deve ser exibida após o envio dos dados.

Cypress - Framework de testes de front-end
JavaScript


🔥 Código do Teste

```javascript
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Henrique')
    cy.get('#signup-email').type('fabioh@teste.com')
    cy.get('#signup-phone').type('62985102020')
    cy.get('#signup-password').type('Fabio123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})


