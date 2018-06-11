//=====sends back an entire Monty Python script via an HTTP stream ======

var https = require('https');

var options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
};

//called by https when the request is made
//callback needs a responde argument to read the response
// var callback = function(response) {
//     console.log('In responde handler callback!');
//     console.log('Response: ', response);
// }

var callback = function(response) {
    console.log('In responde handler callback!');
    //outputs the data as it comes in
    //label response data as chunk
    //prints the length of string
    response.on('data', function(chunk) {
        console.log('[-- CHUNK OF LENGTH ' + chunk.length + '--]');
        console.log(chunk.toString());
    });
}
console.log("I'm about to make the request!");

https.request(options,callback).end();

console.log("I've made the request!");