import RegisterPage from '../pages/RegisterPage'; 
import { randEmail, randFullName } from '@ngneat/falso';

const username = randFullName();
const password = 'terr'

describe('Register User', () => {
  const registerPage = new RegisterPage();

  it('Visits the register page', () => {
      registerPage.visitRegister();

      cy.get('h2').should('contain.text', registerPage.registerH2);
  });

  it('Registers a new user succesfull', () => {
    registerPage.visitRegister();

    registerPage.register(username, password);

    cy.get('form div')
      .should('have.class', registerPage.registerSuccClass)
      .then(($div) => {
        const succMess = $div.text();

        expect(succMess).to.include(registerPage.registerSuccessMess);
      });
  });

  it('shows an error message when trying to register a user with same usernmae', () => {
    registerPage.visitRegister();

    registerPage.register(username, password);

    cy.get('form div')
      .should('have.class', registerPage.registerFailedClass)
      .then(($div) => {
        const message = $div.text();

        expect(message).to.include(registerPage.regFailMessage);
      });
  });
})