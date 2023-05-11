import {
  getLoginPasswordFiled,
  getLoginUserNameFiled
} from '../page-objects/login-page.spec';

const ENV_DATA = Cypress.env('env');

export const BASE_URL = 'https://allo.ua/';

export const LOGIN_TITLE = 'AQA internship Login';

export const PLACEHOLDER_VALUES = {
  username: 'Введіть телефон або e-mail',
  password: 'Введіть пароль',
};

export const ERROR_MESSAGES = {
  enterUsername: "Це поле є обов'язковим для заповнення.",
  enterPassword: "Це поле є обов'язковим для заповнення.",
};

export const INDEX_FOR_ERROR_MESSAGE_CONTAINER = {
  usernameError: 1,
  passwordError: 2,
};

export const VERIFY_USERNAME_ERROR_MESSAGE = {
  selector: getLoginPasswordFiled(),
  value: ENV_DATA.testUser.password,
  index: INDEX_FOR_ERROR_MESSAGE_CONTAINER.usernameError,
  errorMessage: ERROR_MESSAGES.enterUsername,
};

export const VERIFY_PASSWORD_ERROR_MESSAGE = {
  selector: getLoginUserNameFiled(),
  value: ENV_DATA.testUser.username,
  index: INDEX_FOR_ERROR_MESSAGE_CONTAINER.passwordError,
  errorMessage: ERROR_MESSAGES.enterPassword,
};

export const SUCCESSFUL_LOGIN_MESSAGE = {
  noAccountFound: 'Невірна адреса електронної пошти (email) або пароль.'
}