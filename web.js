var express = require('express');

var app = express.createServer(express.logger());


var readData = function (fileName, data) {
  var fs = require('fs');

  data = fs.readFileSync(fileName);
}

app.get('/', function(request, response) {

  var data;
  readData("index.html", data);
  response.send(data.ToString());
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
