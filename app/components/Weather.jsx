var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
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
  }

  componentDidMount() {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render() {
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
};

module.exports = Weather;