var express = require('express'); 
var app = express(); 
app.use(function(req, res, next) { 
console.log('%s %s', req.method, req.url); 
next(); 
}); 
app.get('/', function(req, res, next) { 
res.send('Welcome to M S University of Baroda!'); 
}); 
app.get('/help', function(req, res, next) { 
res.send('How can I help you?'); 
}); 
var server = app.listen(8000, "127.0.0.1", function () { 
var host = server.address().address 
var port = server.address().port 
console.log("Example app listening at http://%s:%s", host, port)
})