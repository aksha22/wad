var express = require('express'); 
var app = express(); 
app.get('/', function (req, res) { 
    console.log("Got a GET request for the homepage"); 
    res.send('Welcome to MSU Baroda!'); 
    }) 
    // This responds a GET request for abcd, abxcd, ab123cd, and so on 
    app.get('/ab*cd', function(req, res) { 
    console.log("Got a GET request for /ab*cd"); 
    res.send('Pattern Matched.'); 
    }) 
    var server = app.listen(8001,"127.0.0.1", function () { 
    var host = server.address().address; 
    var port = server.address().port; 
    console.log('Example app listening at http://%s:%s', host, port); 
    });