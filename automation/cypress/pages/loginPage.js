class LoginPage{
    selectorsList() {
        const selectors = {
         usernameField: "[data-testid='email']",
         passwordField: "[data-testid='senha']",
         loginButton:"[data-testid='entrar']",
         logoutButton: '[data-testid="logout"]',
         signinError: "[role='alert']",
         loginAlert: "[role='alert']"
        }
        return selectors

    }
    accessLoginPage(){
        cy.visit('/login')

    }

    loginUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().logoutButton).should('contain', 'Logout')
        cy.url().should('include', '/home')
        

    }

    loginWrongUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().signinError).should('be.visible')
        

    }

    loginWithBothNone(){
        cy.get(this.selectorsList().usernameField).clear()
        cy.get(this.selectorsList().passwordField).clear()
        cy.get(this.selectorsList().loginButton).click()
        cy.contains('Email é obrigatório').should('be.visible')
        cy.contains('Password é obrigatório').should('be.visible')
        

    }

    
}

export default LoginPage