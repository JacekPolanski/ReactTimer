var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', function () {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var actualText = $(ReactDOM.findDOMNode(clock)).find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      expect(TestUtils.renderIntoDocument(<Clock/>).formatSeconds(615)).toBe('10:15');
    });

    it('should format seconds when min/sec are less than 10', () => {
      expect(TestUtils.renderIntoDocument(<Clock/>).formatSeconds(61)).toBe('01:01');
    });
  });
});
