import LoginPage from '../pages/LoginPage';
import PropertyPage from '../pages/PropertyPage';
import { randEmail, randFullName } from '@ngneat/falso';

const username = 'ale2';
const password = 'alelouki';
const title = randFullName();
const editTitle = 'Edit Title';
const description = 'This is a new description about the amazing property test';
const rent = 1244;

describe('Adds Property Tests', () => {
  const loginPage = new LoginPage();
  const propertyPage = new PropertyPage();

  it('loads the property page successfully', () => {
    loginPage.visitLogin();

    cy.get('h2').should('contain.text', loginPage.h2Header);
    
    loginPage.login(username, password);

    cy.get('span')
      .should('contain.text', `Welcome, ${username}!`);
  });

  it('adds a new property and validates that it is added to table', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);

    propertyPage.clickAddProperty();

    propertyPage.addProperty(title, description, rent);

    // validates success message
    cy.get('.message-success').should('contain.text', propertyPage.successMessage);

    // validates new property is in table
    cy.get('h3').should('contain.text', title);
  });

  it('removes the inputs options when user clicks on cancel', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);

    propertyPage.clickAddProperty();

    propertyPage.clickCancel();

    cy.get('.addForm').should('not.exist');
  });

  it('clicks edit for a property and opens correct form', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);
    
    propertyPage.clickEdit(title);

    cy.get('.editForm').should('exist');
  });

  it('clicks cancel in form edit', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);
    
    propertyPage.clickEdit(title);

    propertyPage.clickCancelEditForm();

    cy.get('editForm').should('not.exist');
  });

  it('directs user to property leads with "Show Leads" is clicked', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);

    propertyPage.clickShowLeads(title);

    cy.get('span').should('contain.text', `All Leads for: ${title}`);
  });

  it('edits the property title', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);
    
    propertyPage.clickEdit(title);

    propertyPage.inputEditTitle(editTitle);

    propertyPage.clickSaveEditForm();

    cy.get('.message-success').should('contain.text', propertyPage.updateMessage);

    cy.get(propertyPage.titleDivinput).should('contain', editTitle);
    
    cy.get(propertyPage.titleDivinput)
      .should('not.contain', title)
  });

  it('deletes a title', () => {
    loginPage.visitLogin();
    
    loginPage.login(username, password);

    propertyPage.clickDelete(editTitle);

    cy.get('.message-success').should('contain.text', propertyPage.deleteMessage);

    cy.get('h3').should('not.contain.text', editTitle);
  })
})

