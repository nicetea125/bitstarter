var request = require('request');
var cheerio = require('cheerio');

request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(response);
    }
    else{
        //Error
    }
});
