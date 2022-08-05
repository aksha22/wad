var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
res.send('<h2>List of Students</h2>'
+"<b1>1. Student-1<br>2. Student-2<br>3. Student-3");
});
router.get('/student_details', function(req, res){
res.send('<h3>Details of Student-1</h3><br>'+
"Name: Aksha<br> Year of Enrollment: 2022-2023<br> Program: BCA");
});
//export this router to use in our index.js
module.exports = router;
