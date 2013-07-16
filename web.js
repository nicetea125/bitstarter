var express = require('express');
var fs = require('fs');
var outfile = fs.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, res) {
   res.send(outfile.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
