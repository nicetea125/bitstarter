var express = require('express');

var app = express.createServer(express.logger());

app.get('/index.html', function(request, res) {
   console.log(arguments);
   response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
