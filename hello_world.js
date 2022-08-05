var express = require('express'); 
var app = express(); 
//Simple request time logger
app.use(function(req, res, next){
console.log("A new request received at " + Date.now());
//This function call is very important. It tells that more processing is
//required for the current request and is in the next middleware function 
next();
});
app.get('/', function(req, res, next) { 
res.send('Welcome to M S University of Baroda!'); 
}); 
var server = app.listen(8000, "127.0.0.1", function () { 
var host = server.address().address 
var port = server.address().port 
console.log("Example app listening at http://%s:%s", host, port) 
})