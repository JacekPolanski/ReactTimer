var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    var addZeroIfLessThanTen = (number) => number < 10 ? '0' + number : number;

    return addZeroIfLessThanTen(minutes) + ':' + addZeroIfLessThanTen(seconds);
  },
  render: function () {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});