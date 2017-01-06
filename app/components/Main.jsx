var React = require('react');
var Nav = require('Nav');

module.exports = ({children}) => (
  <div>
    <Nav/>
    <div>
      <div>
        <p>Main.jsx Rendered</p>
        {children}
      </div>
    </div>
  </div>
);