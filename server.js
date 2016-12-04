var express = require('express');

// create app
var app = express();

app.use(express.static('public'));

app.listen(2112, function () {
  console.log('Express is listening on :2112');
});