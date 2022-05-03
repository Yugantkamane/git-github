var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Nodejs App Succefully running in port 3000 on server 172.29.10.211');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
