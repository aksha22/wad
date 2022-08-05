var express = require('Express');
var app = express();
var student = require('./student.js');
//both route_ex_10.js and student.js should be in same directory
app.use('/stdnt', student);
app.listen(8000);
//Access the URI by /stdnt and /stdnt/tudent_details et