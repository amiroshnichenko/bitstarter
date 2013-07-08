var express = require('express');

var app = express.createServer(express.logger());


var readData = function (fileName) {
  var fs = require('fs');
  var data = fs.readFileSync(fileName);
  return data;
}

app.get('/', function(request, response) {

  var data = readData("index.html");
  response.send(data);
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
