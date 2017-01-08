var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');
var Clock = require('Clock');
var Controls = require('Controls');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should render clock', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var $el = $(ReactDOM.findDOMNode(timer));
    var $clock = $el.find('.' + ReactDOM.findDOMNode(clock).className);

    expect($clock.length).toBe(1);
  });

  it('should render controls', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="test" onStatusChanged={() => {}}/>);
    var $el = $(ReactDOM.findDOMNode(timer));
    var $controls = $el.find('.' + ReactDOM.findDOMNode(controls).className);

    expect($controls.length).toBe(1);
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChanged('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChanged('started');
    timer.handleStatusChanged('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should reset timer on stopped status', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChanged('started');
    timer.handleStatusChanged('stopped');

    expect(timer.state.timerStatus).toBe('stopped');
    expect(timer.state.count).toBe(0);
  });
});