'use strict';

var loginPage = require('../page-objects/login.object');

describe('The boilerplate', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('should show an generic message if nothing is entered and form is submitted', function() {
    loginPage.enterDetailsAndSubmitForm('', '');
    loginPage.getErrorText(function(text) {
      expect(text).toBe('You must enter a username and password');
    });
  });

  it('should show a username validation message if none entered and form is submitted', function() {
    loginPage.enterDetailsAndSubmitForm('', 'Password');
    loginPage.getErrorText(function(text) {
      expect(text).toBe('You must enter a username');
    });
  });

  it('should show a password validation message if none entered and form is submitted', function() {
    loginPage.enterDetailsAndSubmitForm('Username', '');
    loginPage.getErrorText(function(text) {
      expect(text).toBe('You must enter a password');
    });
  });

  it('should successfully navigate to dashboard page if username/password is entered', function() {
    loginPage.enterDetailsAndSubmitForm('Username', 'Password');
    expect(browser.getLocationAbsUrl()).toBe('/dashboard');
  });

});
