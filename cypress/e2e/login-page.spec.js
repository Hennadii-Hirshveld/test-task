import {
  getErrorMessage,
  getLogiButton,
  getLoginAlert,
  getLoginAndPass,
  getLoginPasswordFiled,
  getLoginUserNameFiled,
} from '../page-objects/login-page.spec';
import {
  BASE_URL,
  ERROR_MESSAGES,
  INDEX_FOR_ERROR_MESSAGE_CONTAINER,
  PLACEHOLDER_VALUES,
  VERIFY_PASSWORD_ERROR_MESSAGE,
  VERIFY_USERNAME_ERROR_MESSAGE,
} from '../shared-data/login-page-constants';
import {
  login,
  verifyAllExistingElements,
  verifyErrorMessageAppear,

} from '../support/login-page/asserts/login-page-asserts';

const ENV_DATA = Cypress.env('env');

describe('Test Login form component', () => {
  beforeEach(() => {
      cy.intercept('GET', BASE_URL).as('loadContent');
      cy.visit(BASE_URL);
      cy.wait('@loadContent');

  });

  it('Test without username and password ', () => {
      cy.get(getLoginAlert()).click();
      cy.get(getLoginAndPass()).click();
      login(ENV_DATA.testUser.username, ENV_DATA.testUser.password);
      const VERIFY_ELEMENTS = [
          getLoginUserNameFiled(),
          getLoginPasswordFiled(),

      ];
      verifyAllExistingElements(VERIFY_ELEMENTS);

  });


  it('Test that specific errors are appear when user click login without user name and password data', () => {
      cy.get(getLoginAlert()).click();
      cy.get(getLoginAndPass()).click();
      cy.get(getLogiButton()).should('exist').click();
      [
          [INDEX_FOR_ERROR_MESSAGE_CONTAINER.usernameError, ERROR_MESSAGES.enterUsername],
          [INDEX_FOR_ERROR_MESSAGE_CONTAINER.passwordError, ERROR_MESSAGES.enterPassword],
      ].forEach((value) => {
          const [selectorIndex, elementValue] = value;
          cy.verifyThatElementHasSpecificText(getErrorMessage(selectorIndex), elementValue);
      });
  });

  it('Fill only username field, and verify the error message appear', () => {
      cy.get(getLoginAlert()).click();
      cy.get(getLoginAndPass()).click();
      verifyErrorMessageAppear(VERIFY_PASSWORD_ERROR_MESSAGE);
  });

  it('Fill only password field, and verify the error message appear,', () => {
      cy.get(getLoginAlert()).click();
      cy.get(getLoginAndPass()).click();
      verifyErrorMessageAppear(VERIFY_USERNAME_ERROR_MESSAGE);
  });




});