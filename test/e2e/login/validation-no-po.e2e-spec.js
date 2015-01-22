'use strict';

describe('The boilerplate', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('should show an generic message if nothing is entered and form is submitted', function() {
    element(by.model('user.username')).sendKeys('');
    element(by.model('user.password')).sendKeys('');
    element(by.css('.login')).click();

    element(by.css('.error')).getText().then(function(text) {
      expect(text).toBe('You must enter a username and password');
    });
  });

  it('should show a username validation message if none entered and form is submitted', function() {
    element(by.model('user.username')).sendKeys('');
    element(by.model('user.password')).sendKeys('Password');
    element(by.css('.login')).click();

    element(by.css('.error')).getText().then(function(text) {
      expect(text).toBe('You must enter a username');
    });
  });

  it('should show a password validation message if none entered and form is submitted', function() {
    element(by.model('user.username')).sendKeys('Username');
    element(by.model('user.password')).sendKeys('');
    element(by.css('.login')).click();

    element(by.css('.error')).getText().then(function(text) {
      expect(text).toBe('You must enter a password');
    });
  });

  it('should successfully navigate to dashboard page if username/password is entered', function() {
    element(by.model('user.username')).sendKeys('Username');
    element(by.model('user.password')).sendKeys('Password');
    element(by.css('.login')).click();

    expect(browser.getLocationAbsUrl()).toBe('/dashboard');
  });

});
