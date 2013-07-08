var express = require('express');

var app = express.createServer(express.logger());


var readData = function (fileName), data {
  var fs = require('fs');
  fs.readFileSync(fileName, data);
}

app.get('/', function(request, response) {

  var data;
  readData("index.html", data);
  response.send(data);
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
