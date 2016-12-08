var axios = require('axios');

const OPEN_WEATHER_MAP_API = 'f4fbf42ab8b9b23c094282d99634952b';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + OPEN_WEATHER_MAP_API;


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL)
    .then(function(res){
      if (res.data.doc && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    })
    .catch(function(err) {
      throw new Error(err.message);
    })
  }
}