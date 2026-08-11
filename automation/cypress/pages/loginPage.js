class LoginPage{
    selectorsList() {
        const selectors = {
         usernameField: "[data-testid='email']",
         passwordField: "[data-testid='senha']",
         loginButton:"[data-testid='entrar']",
         logoutButton: '[data-testid="logout"]',
         signinError: "[role='alert']",
         none: "[role='alert']"
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
        cy.get(this.selectorsList().none).eq(0).should('be.visible')
        cy.get(this.selectorsList().none).eq(1).should('be.visible')
        

    }

    
}

export default LoginPage