var React = require('react');
var Nav = require('Nav');

module.exports = (props) => (
  <div>
    <Nav/>
    <div className="row">
      <div className="column small-centered medium-6 large-4">
        {props.children}
      </div>
    </div>
  </div>
);