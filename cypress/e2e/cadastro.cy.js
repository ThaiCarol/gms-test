

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `emailteste${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda' , 'Monteiro' , email , '62985100000' , 'Teste1234@')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')

  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    var email = `emailteste${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda1' , 'Monteiro' , 'fernandam@teste.com' , '62985100000' , 'Teste1234@')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')

  })
  
  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    var email = `emailteste${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda' , 'Monteiro20' , 'fernandam@teste.com' , '62985100000' , 'Teste1234@')
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')

  })
  
  it('Deve validar mensagem de erro com o campo email inválido', () => {
    var email = `emailteste${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda' , 'Monteiro' , 'fernandam.teste.com' , '62985100000' , 'Teste1234@')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')

  })

  it('Deve validar mensagem de erro com o campo email vazio', () => {
    var email = `emailteste${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda' , 'Monteiro' , ' ' , '62985100000' , 'Teste1234@')
    cy.get('#signup-response').should('contain' , 'E-mail não pode estar vazio')

  })

  it.only('Deve validar mensagem de erro com senha inválida', () => {
    var email = `emailteste${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda' , 'Monteiro' , 'fernandam@teste.com' , '62985100000' , 'teste123')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')

  })


})  