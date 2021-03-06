var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component{
  onSearch(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if (encodedLocation.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink activeClassName="active" to="/">Get Weather</IndexLink></li>
            <li><Link activeClassName="active" to="/about">About</Link></li>
            <li><Link activeClassName="active" to="/examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li><input type="search" placeholder="Search weather by city" ref="location"/></li>
              <li><button className="button" type="submit">Get weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
};

module.exports = Nav;