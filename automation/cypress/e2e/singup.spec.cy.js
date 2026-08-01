import userData from '../fixtures/users/userData.json'
import SignupPage from '../pages/signupPage'


const signupPage = new SignupPage()


describe('registration success', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    signupPage.accessSignupPage()
    signupPage.signupWithUser(userData.userSucess.userName, userData.userSucess.userEmail, userData.userSucess.userPassword)
  })
})
