'use strict';

// Primative page interfaces
function enterAmount(amount) {
  return element(by.model('transfer.amount')).sendKeys(amount);
}
function enterAccount(account) {
  return element(by.model('transfer.to')).sendKeys(account);
}
function makeTransfer() {
  return element(by.css('.transfer')).click();
}
function getBackToDashboardLink() {
  return element(by.css('#back'));
}

function addTransfer(amount, account) {
  enterAmount(amount);
  enterAccount(account);
  makeTransfer();
}

var GetTransferByIndex = function(index) {

  this.getAmount = function(next) {
    element(by.css('#transfer-' + index + ' .amount')).getText().then(next);
  };

  this.getAccount = function(next) {
    element(by.css('#transfer-' + index + ' .to')).getText().then(next);
  };

  this.getTimestamp = function(next) {
    element(by.css('#transfer-' + index + ' .timestamp')).getText().then(next);
  };
};

module.exports = {
  addTransfer: addTransfer,
  enterAccount: enterAccount,
  enterAmount: enterAmount,
  makeTransfer: makeTransfer,
  GetTransferByIndex: GetTransferByIndex,
  getBackToDashboardLink: getBackToDashboardLink
}
