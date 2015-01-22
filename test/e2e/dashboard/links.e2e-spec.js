'use strict';

var dashboardPage = require('../page-objects/dashboard.object');

describe('The boilerplate', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/dashboard');
  });

  it('should allow a user to navigate to the transfer page', function() {
    expect(dashboardPage.getTransferLink()).not.toBeUndefined();
    dashboardPage.getTransferLink().click();
    expect(browser.getLocationAbsUrl()).toBe('/dashboard/transfer');
  });

});
