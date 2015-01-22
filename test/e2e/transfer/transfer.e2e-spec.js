'use strict';

var transferPage = require('../page-objects/transfer.object');

describe('The boilerplate', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/dashboard/transfer');
  });

  it('should create a single transfer and show the user', function() {
    transferPage.addTransfer('2000', '348093840930');

    var transferOutput = new transferPage.GetTransferByIndex(1);
    transferOutput.getAmount(function(amount) {
      expect(amount).toBe('2000');
    });
    transferOutput.getAccount(function(account) {
      expect(account).toBe('348093840930');
    });
  });

  it('should allow a user to create multiple transfers', function() {
    transferPage.addTransfer('2000', '348093840930');
    transferPage.addTransfer('3000', '830459834003');

    var transferOutput = new transferPage.GetTransferByIndex(1),
        transferOutput2 = new transferPage.GetTransferByIndex(2);

    transferOutput.getAmount(function(amount) {
      expect(amount).toBe('2000');
    });
    transferOutput.getAccount(function(account) {
      expect(account).toBe('348093840930');
    });

    transferOutput2.getAmount(function(amount) {
      expect(amount).toBe('3000');
    });
    transferOutput2.getAccount(function(account) {
      expect(account).toBe('830459834003');
    });
  });

  it('should allow a user to navigate back tot he dashboard page', function() {
    expect(transferPage.getBackToDashboardLink()).not.toBeUndefined();
    transferPage.getBackToDashboardLink().click();
    expect(browser.getLocationAbsUrl()).toBe('/dashboard');
  });

});
