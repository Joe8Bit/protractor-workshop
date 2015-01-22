'use strict';

describe('The boilerplate', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('the background colour of the welcome bar should be blue', function() {
    element(by.css('h1')).getCssValue('background-color').then(function(color) {
      expect(color).toBe('rgba(176, 237, 232, 1)');
    });
  });

  it('the border of the box should be gray', function() {
    element(by.css('#container')).getCssValue('border-color').then(function(color) {
      expect(color).toBe('rgb(204, 204, 204)');
    });
  });

});
