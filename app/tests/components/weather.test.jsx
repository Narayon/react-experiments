var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var testUtils = require('react-addons-test-utils');

var Weather = require('Weather');

describe('Weather', () => {
  it('should exist', () => {
    expect(Weather).toExist();
  });

  describe('test function', () => {
    it('should return something', () => {
      var weather =testUtils.renderIntoDocument('<Weather/>');
      var result = weather.someFunction();
      var actual = '';

      expect(actual).toBe(result);
    });

    it('should return something else', () => {
      var weather =testUtils.renderIntoDocument('<Weather/>');
      var result = weather.someFunction();
      var actual = '';

      expect(actual).toBe(result);
    });
  });
});