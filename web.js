
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(30);
app.get('/', function(request, response) {

var filecont = (fs.readFileSync("index.html"));
buf.write(filecont,'utf-8');

response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
