'use strict';

// Primative page interfaces
function enterUserName(username) {
  return element(by.model('user.username')).sendKeys(username);
}
function enterPassword(password) {
  return element(by.model('user.password')).sendKeys(password);
}
function submitLoginForm() {
  return element(by.css('.login')).click();
}
function getErrorText(next) {
  element(by.css('.error')).getText().then(next);
}

// Page Object patterns and actions
function enterDetailsAndSubmitForm(username, password) {
  enterUserName(username);
  enterPassword(password);
  submitLoginForm();
}

module.exports = {
  enterUserName: enterUserName,
  enterPassword: enterPassword,
  submitLoginForm: submitLoginForm,
  getErrorText: getErrorText,
  enterDetailsAndSubmitForm: enterDetailsAndSubmitForm
}
