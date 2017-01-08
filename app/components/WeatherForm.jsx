var React = require('react');

class WeatherForm extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="search" name="city" ref="location" placeholder="Search weather by city"/>
        <button className="button expanded hollow" type="submit">Get the Weather</button>
      </form>
    );
  }
};

module.exports = WeatherForm;