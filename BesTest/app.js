var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser = require('body-parser');
const multer = require("multer");
const cors = require("cors");
const PORT = 3001;


//import database 
var mongoose = require('mongoose');

var Order= require('./routes/Order');
var adminRouter= require('./routes/admin');
var lessonRouter= require('./routes/lesson');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teacherRouter= require('./routes/teacherRequest');
var parentRouter= require('./routes/parentRequest');
var kidRouter= require('./routes/kid');
var feedbackRouter= require('./routes/feedback');
var claimRouter= require('./routes/claim');
var exerciceRouter= require('./routes/exercice');
var examenRouter= require('./routes/examen');
var exerciceRouter= require('./routes/exercice');
var lessonRouter= require('./routes/lesson');
var auth= require('./routes/auth');



var config=require('./config/config.json');

var app = express();
app.use(bodyparser.urlencoded({
  extended: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/lesson', lessonRouter);
app.use('/teacherR', teacherRouter);
app.use('/parentR', parentRouter);
app.use('/kid', kidRouter);
app.use('/claim', claimRouter);
app.use('/feedback', feedbackRouter);
app.use('/exercice', exerciceRouter);
app.use('/examen', examenRouter);
app.use('/exrecice', exerciceRouter);
app.use('/lesson', lessonRouter);
app.use('/auth', auth);
app.use('/order', Order);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//import database 
var mongoose = require('mongoose');
//mongo config 
const connect = mongoose.connect(
config.mongo.uri, 

function(err,db){
  if(err){ throw err;}
});

module.exports = app;
