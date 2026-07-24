class LoginPage{
    selectorsList() {
        const selectors = {
         usernameField: "[data-testid='email']",
         passwordField: "[data-testid='senha']",
         loginButton:"[data-testid='entrar']",
         logoutButton: '[data-testid="logout"]',
         signinError: '.alert-dismissible'  
        }
        return selectors

    }
    accessLoginPage(){
        cy.visit('/login')

    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().logoutButton).should('contain', 'Logout')
        

    }

    loginWithWrongUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().signinError).should('be.visible')

    }

    
}

export default LoginPage