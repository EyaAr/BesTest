var express = require('express');
var router = express.Router();
var claim=require('../models/claim.model');
var bodyParser = require('body-parser');  


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('claim', { title: 'Express' });
});

module.exports = router;
 
/* Ajouter claim.*/
router.post('/', (req, res,next) =>{
  console.log(req.body);
new claim({ 
  description: req.body.description,
  topic:req.body.topic,
  teacher:req.body.teacher,
  createdAt:Date.now(),
  
}).save(function(err, msg)
{   
  res.redirect('/claim');
  console.log(msg);
})

});