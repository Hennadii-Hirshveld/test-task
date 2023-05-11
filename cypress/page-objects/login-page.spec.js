export const getLoginAlert = () => {
  return ('div[class="mh-profile"]');
};

export const getLoginAndPass = () => {
  return ('div[class="auth__enter-password"]');
};



export const getLoginUserNameFiled = () => {
  return 'input[name="phoneEmail"]';
};

export const getLoginPasswordFiled = () => {
  return 'input[name="password"]';
};

export const getLogiButton = () => {
  return 'button[class="a-button a-button--block a-button--lg a-button--primary"]';
};


export const errorNotificationContainer = () => {
  return cy.get('div[class="a-input is-error"] span');
};

export const getErrorMessage = (indexOfErrorMessage) => {
  return `div[class="a-input is-error"]:nth-child(${indexOfErrorMessage}) span`;
};