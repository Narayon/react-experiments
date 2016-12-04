var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink activeClassName="active" to="/">Get Weather</IndexLink>
      <Link activeClassName="active" to="/about">About</Link>
      <Link activeClassName="active" to="/examples">Examples</Link>
    </div>
  );
}

module.exports = Nav;