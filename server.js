var express = require('express');

// create app
var app = express();
const PORT = process.env.PORT || 2112;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express is listening on' + PORT);
});