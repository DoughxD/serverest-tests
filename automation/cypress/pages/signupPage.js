class SignupPage{
    selectorsList() {
        const selectors = {
            nameField: "[data-testid='nome']",
            emailFiel: "[data-testid='email']",
            passField: "[data-testid='email']",
            signupButton: '[data-testid="cadastrar"]',
            logoutButton: '[data-testid="logout"]'
        }
        return selectors

    }
    accessSignupPage(){
        cy.visit('/cadastrarusuarios')

    }

    signupWithUser(username, email, password){
        cy.get(this.selectorsList().nameField).type(username)

        cy.get(this.selectorsList().emailFiel).type(email)
        cy.get(this.selectorsList().passField).type(password)
        cy.get(this.selectorsList().signupButton).click()
        cy.get(this.selectorsList().logoutButton).should('be.visible')
    

    }

    loginWithWrongUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().signinError).should('be.visible')

    }

    
}

export default SignupPage