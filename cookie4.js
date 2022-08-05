var express = require('express');
var app = express();
app.get('/', function(req, res){
//This cookie also expires after 360000 ms from the time it is set.
//This is relative time to expire
res.cookie('head_of_department', 'P K Mehta', {maxAge: 360000});; //Sets 
//name = express which will expire in 1 hour
res.send('cookie set to expire in 1 hour'); 
});
//app.listen(3000);
var server = app.listen(3000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
});