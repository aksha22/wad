var express = require('express');
var app = express();
app.get('/clear_cookie_university', function(req, res){
res.clearCookie('university');
res.send('Cookie university cleared');
});
//app.listen(3000);
var server = app.listen(3000,"127.0.0.1", function () { 
var host = server.address().address; 
var port = server.address().port; 
console.log('Example app listening at http://%s:%s/', host, port); 
}); 