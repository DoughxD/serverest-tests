import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'


const loginPage = new LoginPage()


describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.userEmail, userData.userSucess.userPassword)
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongUser(userData.userFailed.userEmail, userData.userFailed.userPassword)
  })
})