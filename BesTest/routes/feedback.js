var express = require('express');
var router = express.Router();
var feedback=require('../models/feedback.model');
var bodyParser = require('body-parser');  


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('feedback', { title: 'Express' });
});

module.exports = router;


/* Ajouter feedback. */
router.post('/', (req, res,next) =>{
  console.log(req.body);
new feedback({ 
  description: req.body.description,
  createdAt:Date.now(),
  
}).save(function(err, msg)
{   
  res.redirect('/kid/listk');
  console.log(msg);
})

});