var express = require('express'); 
var app = express(); 
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage"); 
    res.send('Welcome to <b>Department of Computer Applications </b> <br/>MSU Baroda'); 
    }) 
    app.post('/', function (req, res) { 
    console.log("Got a POST request for the homepage"); 
    res.send('I am Impossible! '); 
    }) 
    app.delete('/del_student', function (req, res) { 
    console.log("Got a DELETE request for /del_student"); 
    res.send('I am Deleted!'); 
    }) 
    app.put('/update_student', function (req, res) { 
    console.log("Got an UPDATE request for /update_student"); 
    res.send('I am Updated!'); 
    }) 
    app.get('/enrolled_student', function (req, res) { 
    console.log("Got a GET request for /enrolled_student"); 
    res.send('I am an enrolled student.'); 
    }) 
    var server = app.listen(8001,"127.0.0.1", function () { 
    var host = server.address().address; 
    var port = server.address().port; 
    console.log('Example app listening at http://%s:%s', host, port); 
    }); 