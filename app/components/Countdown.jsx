var React = require('react');
var Clock = require('Clock');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});