var cors = require("cors");
const express = require("express");
const app = express();
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

app.use(
  cors({
    origin: "*",
  })
);

// Global envirenement
require("dotenv").config();
// Import DATABASE CONNEXION
const connectDB = require("./config/connectDB");
connectDB();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Global Routes
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

// Start server
// PORT
const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is Running on PORT ${PORT}`);
});
