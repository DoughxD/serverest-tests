import userData from '../fixtures/users/userData.json'
import SignupPage from '../pages/signupPage'


const signupPage = new SignupPage()


describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    signupPage.accessSignupPage()
    signupPage.signupWithUser(userData.userSucess.userName, userData.userSucess.userEmail, userData.userSucess.userPassword)
  })
})
