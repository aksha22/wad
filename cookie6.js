var express = require('express'); 
var cookieParser = require('cookie-parser'); 
var app = express(); 
app.use(cookieParser()); 
app.get('/cookieget', function(req, res) { 
res.status(200).send(req.cookies); 
}); 
var server = app.listen(8000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
});