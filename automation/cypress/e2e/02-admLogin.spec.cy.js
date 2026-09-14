import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'


const loginPage = new LoginPage()


describe('TC-UI-001 — Login com sucesso (Administrador)', () => {
  it(' efetuado Login com sucesso. o ADM deve ser redirecionado para o Dashboard Administrativo.', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userADM.userEmail, userData.userADM.userPassword)
  })
})
