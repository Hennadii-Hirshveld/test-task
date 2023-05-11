import {
  getErrorMessage,
  getLogiButton,
  getLoginPasswordFiled,
  getLoginUserNameFiled,
} from '../../../page-objects/login-page.spec';



export const login = (username, password) => {
  cy.get(getLoginUserNameFiled()).should('exist').clear().type(username);
  cy.get(getLoginPasswordFiled()).should('exist').clear().type(password);
  cy.get(getLogiButton()).should('exist').click();
}




export const verifyAllExistingElements = (array) => {
  array.forEach((element) => {
      cy.get(element).should('exist');
  });
};


export const verifyErrorMessageAppear = (arg) => {
  cy.get(arg.selector).should('exist').clear().type(arg.value);
  cy.get(getLogiButton()).should('exist').click();
  cy.verifyThatElementHasSpecificText(getErrorMessage(arg.index), arg.errorMessage);
};

    