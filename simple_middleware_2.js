var express = require('express'); 
var app = express(); 
function logger(req, res, next) { 
console.log('%s %s', req.method, req.url); 
next(); 
}; 
app.use(logger);
app.get('/', function(req, res, next) { 
res.send('Welcome to M S University of Baroda!'); 
}); 
var server = app.listen(8000, "127.0.0.1", function () { 
var host = server.address().address 
var port = server.address().port 
console.log("Example app listening at http://%s:%s", host, port) 
})