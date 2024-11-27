import LoginPage from '../pages/LoginPage';

const username = 'ale2';
const password = 'alelouki';

describe('Login Page Tests', () => {
  const loginPage = new LoginPage();

  it('It logs in users', () => {
    loginPage.visitLogin();

    cy.get('h2').should('contain.text', loginPage.h2Header);
    
    loginPage.login(username, password);

    cy.get('span')
      .should('contain.text', `Welcome, ${username}!`);
  });

  it('Clicks on Need an account and navigates to Registration page', () => {
    loginPage.visitLogin();

    loginPage.clickNeedAnAccount();

    cy.get('h2').should('contain.text', 'Register');
  });
})

