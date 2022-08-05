var express = require('express'); 
var app = express(); 
app.get('/', function (req, res) { 
console.log("Got a GET request for the homepage"); 
res.send('Welcome to MSU Baroda!'); 
}) 
app.get('/about_us', function (req, res) { 
console.log("Got a GET request for the About Us Page"); 
res.send('Welcome to About Us'); 
}) 
app.get('/contact_us', function (req, res) { 
console.log("Got a GET request for the Contact Us Page"); 
res.send('Welcome to Contact Us'); 
}) 
app.get('/services', function (req, res) { 
console.log("Got a GET request for the Services Page"); 
res.send('Welcome to our Services'); 
}) 
// This responds a GET request for abcd, abxcd, ab123cd, and so on 
app.get('*', function(req, res) { 
console.log("404 Error"); 
res.send('404 Error, No such resource found'); 
}) 
var server = app.listen(8001,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
}); 