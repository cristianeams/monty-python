var https = require('https');
//console.log('I did it!');

var options = {
    host: 'www.example.org',
    path: '/'
};

//called by https when the request is made
//callback needs a responde argument to read the response
var callback = function(response) {
    console.log('In responde handler callback!');
    console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options,callback).end();

console.log("I've made the request!");