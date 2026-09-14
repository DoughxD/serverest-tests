// cypress/e2e/userSingup.spec.cy.js
import userData from '../fixtures/users/userData.json'
import SignupPage from '../pages/signupPage'

const signupPage = new SignupPage()

describe('registration success', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    const timestamp = Date.now()
    const email = userData.user.userEmail.replace('TIMESTAMP', timestamp)

    signupPage.accessSignupPage()
    signupPage.signupUser(userData.user.userName, email, userData.user.userPassword)
  })
})