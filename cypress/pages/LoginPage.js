class LoginPage {
    constructor() {
        this.usernameInputType = 'input[type="text"]';
        this.usernameLabel = 'Username:'
        this.passwordInputType = 'input[type="password"]';
        this.passwordLabel = "Password:";
        this.loginButtonType = 'button[type="submit"]';
        this.loginButtonLabel = 'Login';
        this.needAnAccount = 'Need an account? Register';
        this.h2Header = 'Login';

    }

    visitLogin() {
        cy.visit('/');
    }

    inputUsername(username) {
        cy.get('label')
          .contains(this.usernameLabel)
          .siblings(this.usernameInputType)
          .type(username);
    }

    inputPassword(password) {
        cy.get('label')
          .contains(this.passwordLabel)
          .siblings(this.passwordInputType)
          .type(password);
    }

    clickLogin() {
        cy.get(this.loginButtonType)
          .contains(this.loginButtonLabel)
          .click();
    }

    login(username, password) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickLogin();
    }

    clickNeedAnAccount() {
        cy.get('p').contains(this.needAnAccount).click();
    }
}

export default LoginPage;
