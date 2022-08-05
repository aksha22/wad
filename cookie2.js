var express = require('express'); 
var cookieParser = require('cookie-parser'); 
var app = express(); 
app.use(cookieParser()); 
app.get('/cookieset',function(req, res){ 
res.cookie('course_name', 'BCA'); 
res.cookie('semester', 5); 
res.cookie('coordinator', 'Ms. Krishna Bhati'); 
res.cookie('university', 'MSU Baroda'); 
res.status(200).send('Cookie is set'); 
}); 
app.get('/cookieget', function(req, res) { 
res.status(200).send(req.cookies); 
}); 
app.get('/', function (req, res) { 
res.status(200).send('Welcome to world of Cookie!'); 
}); 
var server = app.listen(8000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s', host, port); 
});