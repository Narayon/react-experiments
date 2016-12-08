var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: () => ({
    isLoading: false
  }),
  handleSearch: function (location) {
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location)
      .then((temp) => {
        this.setState({
          location: location,
          temp: parseInt(temp),
          isLoading: false,
        });
      })
      .catch((err) => {
        debugger;
        this.setState({
          isLoading: false
        });
        alert(err);
      })
  },
  render: function () {
    var {temp, location, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching from the API</h3>;
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;