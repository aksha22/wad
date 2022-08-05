var express = require('express');
var app= express();
app.get('/search_student_by_prn/:prn([0-9]{16})',function(req, res){
res.send("<h3>List of studnets filtered by PRN :</h3>" +req.params.prn);
});
app.listen(8000)