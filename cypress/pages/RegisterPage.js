class RegisterPage {
    constructor() {
        this.needAnAccount = 'Need an account? Register';
        this.registerH2 = 'Register';
        this.usernameInputType = 'input[type="text"]';
        this.usernameLabel = 'Username:';
        this.passwordInputType = 'input[type="password"]';
        this.passwordLabel = 'Password:';
        this.registerButton = 'button[type="submit"]';
        this.registerButtonLabel = 'Register';
        this.registerSuccessMess = 'User registered successfully! You can now login.';
        this.registerSuccClass = 'message-success';
        this.registerFailedClass = 'message-error';
        this.regFailMessage = 'Failed to register. Please try again.';
    }

    visitRegister() {
        cy.visit('/');

        cy.get('p').contains(this.needAnAccount).click();
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

    clickRegister() {
        cy.get(this.registerButton)
          .contains(this.registerButtonLabel)
          .click();
    }

    register(username, password) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickRegister();
    }
}

export default RegisterPage;