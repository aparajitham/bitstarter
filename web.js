
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(30);
buf = (fs.readFileSync('index.html'));
app.get('/', function(request, response) {



//Buffer.write(filecont,'utf-8');

response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
