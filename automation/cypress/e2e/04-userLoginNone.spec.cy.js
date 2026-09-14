import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'


const loginPage = new LoginPage()



describe('TC-UI-006 — Validação de campos obrigatórios vazios', () => {
  it.only(' Login não realizado. Sistema exibe as mensagens "Email é obrigatório" e "Password é obrigatório', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithBothNone()
  })
})

