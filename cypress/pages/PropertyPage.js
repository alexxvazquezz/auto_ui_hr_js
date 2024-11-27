class PropertyPage {
    constructor() {
        this.addPropertyButton = '.header button:contains("Add Property")';
        this.logoutButton = '.header button:contains("Logout")';
        this.submitButton = '.addForm button:contains("Submit")';
        this.cancelButton = '.addForm button:contains("Cancel")';
        this.titleInput = '.addForm input[placeholder="Title"]';
        this.descriptionInput = '.addForm input[placeholder="Description"]';
        this.rentInput = '.addForm input[placeholder="Rent"]';
        this.messageSuccessClass = 'message-success';
        this.successMessage = 'Property added successfully!';
        this.deleteMessage = 'Property deleted successfully!';
        this.updateMessage ='Property updated successfully!';

        this.titleDivinput = '.property .dataInput h3';
        this.propertyTableClass = '.property';
        this.actionButtonsClass = '.actionButtons button';
        this.editFormButtons = '.editForm button';
        this.formatInput = '.formInput label';
    }

    clickEdit(title) {
        cy.contains(this.titleDivinput, title)
          .closest(this.propertyTableClass) // moves up to parent
          .find(this.actionButtonsClass)
          .contains('Edit')
          .click()
    }

    clickCancelEditForm() {
        cy.get(this.editFormButtons).contains('Cancel').click();
    }

    clickSaveEditForm() {
        cy.get(this.editFormButtons).contains("Save").click();
    }

    clickDelete(title) {
        cy.contains(this.titleDivinput, title)
          .closest(this.propertyTableClass)
          .find(this.actionButtonsClass)
          .contains('Delete')
          .click();
    }

    clickShowLeads(title) {
        cy.contains(this.titleDivinput, title)
          .closest(this.propertyTableClass)
          .find(this.actionButtonsClass)
          .contains('Show Leads')
          .click();
    } 

    clickAddProperty() {
        cy.get(this.addPropertyButton).click();
    }

    clickLogoutButton() {
        cy.get(this.logoutButton).click();
    }

    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    clickCancel() {
        cy.get(this.cancelButton).click();
    }

    inputTitle(title) {
        cy.get(this.titleInput).type(title);
    }

    inputDescription(description) {
        cy.get(this.descriptionInput).type(description);
    }

    inputRent(rent) {
        cy.get(this.rentInput).type(rent);
    }

    addProperty(title, description, rent) {
        this.inputTitle(title);
        this.inputDescription(description);
        this.inputRent(rent);
        this.clickSubmit();
    }

    inputEditTitle(title) {
        cy.get(this.formatInput)
          .contains('Title')
          .siblings('input')
          .clear()
          .type(title);
    }
}

export default PropertyPage;
