var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: () => ({
    isLoading: false
  }),
  handleSearch: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
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
        this.setState({
          isLoading: false,
          errorMessage: err.message
        });
      })
  },
  render: function () {
    var {temp, location, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching from the API</h3>;
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError() {
      if (typeof errorMessage == 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;