// cypress/e2e/admSingup.spec.cy.js
import userData from '../fixtures/users/userData.json'
import SignupPage from '../pages/signupPage'

const signupPage = new SignupPage()

describe('TC-UI-001 — Cadastro com sucesso (Administrador)', () => {
  it('cadastro efetuado com sucesso. Usuário redirecionado para a tela de administração e mensagem de boas-vindas exibida.', () => {
    const timestamp = Date.now()
    const email = userData.userADM.userEmail.replace('TIMESTAMP', timestamp)

    signupPage.accessSignupPage()
    signupPage.signupAdmUser(userData.userADM.userName, email, userData.userADM.userPassword)
  })
})