
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var Buffer = new Buffer(30);
Buffer = (fs.readFileSync('index.html'));
app.get('/', function(request, response) {


//Buffer.write(filecont,'utf-8');

response.send(Buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
