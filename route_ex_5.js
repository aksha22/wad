var express = require('express');
var app= express();
app.get('/get_student_details/:id',function(req, res){
res.send("Your ID:"+req.params.id);
});
app.listen(8000)