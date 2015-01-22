'use strict';

var loginPage = require('../page-objects/login.object'),
    dashboardPage = require('../page-objects/dashboard.object'),
    transferPage = require('../page-objects/transfer.object');

describe('The boilerplate', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('the user should signin, make a transfer and go back to the dashboard', function() {

    // Login page
    loginPage.enterDetailsAndSubmitForm('Username', 'Password');
    expect(browser.getLocationAbsUrl()).toBe('/dashboard');

    // Dashboard page
    dashboardPage.getTransferLink().click();
    expect(browser.getLocationAbsUrl()).toBe('/dashboard/transfer');

    // Transfer page
    transferPage.addTransfer('2000', '348093840930');

    var transferOutput = new transferPage.GetTransferByIndex(1);
    transferOutput.getAmount(function(amount) {
      expect(amount).toBe('2000');
    });
    transferOutput.getAccount(function(account) {
      expect(account).toBe('348093840930');
    });

    transferPage.getBackToDashboardLink().click();
    expect(browser.getLocationAbsUrl()).toBe('/dashboard');

  });

});
