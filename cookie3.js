var express = require('express');
var app = express();
app.get('/', function(req, res){
//Expires after 360000 ms from the time it is set.
res.cookie('student_name', 'Krish', {expire: 360000 +
Date.now()}); //Sets name = express which will expire in 1 hour
res.send('cookie set to expire in 1 hour'); 
});
//app.listen(3000);
var server = app.listen(3000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
}); 