class SignupPage{
    selectorsList() {
        const selectors = {
            nameField: "[data-testid='nome']",
            emailField: "[data-testid='email']",
            passField: "[data-testid='password']",
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

        cy.get(this.selectorsList().emailField  ).type(email)
        cy.get(this.selectorsList().passField).type(password)
        cy.get(this.selectorsList().signupButton).click()
        cy.get(this.selectorsList().logoutButton).should('be.visible')
    }

    
}

export default SignupPage