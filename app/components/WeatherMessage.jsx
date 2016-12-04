var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p>It's {temp}° on {location}.</p>
  );
}

module.exports = WeatherMessage;