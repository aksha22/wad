var express = require('express');
var app= express();
app.get('/filter_students_by/:dept/:batch',function(req, res){
res.send("<h3>List of students filtered by</h3>"+
"Department:"+req.params.dept +
"<br> Batch:" +req.params.batch);
});
app.listen(8000);
//URL: http://localhost:8000/msu/1234