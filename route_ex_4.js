var express = require('express');
var app= express();
app.get('/get_student_details',function(req, res){
var stdObj = {
seatNo: 12590,
PRN: 2022123456122234,
name: "Aksha Shelat",
semester:5,
batch:'2022-2025'
}
res.send(stdObj);
});
app.listen(8000);