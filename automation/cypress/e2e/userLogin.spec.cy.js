import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'


const loginPage = new LoginPage()



describe('TC-UI-004 — Login com sucesso (Usuário comum)', () => {
  it(' Login efetuado com sucesso. Usuário redirecionado para a Home Page', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.user.userEmail, userData.user.userPassword)
  })
})

describe('TC-UI-005 — Falha no login — Credenciais inválidas', () => {
  it('Login não realizado. Sistema permanece na tela de login e exibe a mensagem "Email e/ou senha inválidos', () => {
    loginPage.accessLoginPage()
    loginPage.loginWrongUser(userData.userFailed.userEmail, userData.userFailed.userPassword)
  })
})