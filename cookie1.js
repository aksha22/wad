var express = require('express');
var app = express();
app.get('/', function(req, res){
//res.cookie('course_name', 'BCA').send('Hey, cookie set'); //Sets 
//course_name = BCA
res.cookie('course_name', 'BCA')
res.send('Hey, cookie set'); //Sets course_name = BCA
//console.log('Cookies: ', req.cookies);
});
//app.listen(4000);
var server = app.listen(4000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
});