var express = require("express");
var router = express.Router();

var bodyParser = require("body-parser");

const lessonModel = require("../models/lesson.model");
const exerciceModel = require("../models/exercice.model");
const multer = require("multer");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//const upload = require('../middleware/upload')

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, "uploads/exercices/");
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("exercice", { title: "Express" });
});

module.exports = router;



//Afficher ex by subject

router.get("/Arabic", async (request, res) => {
  const listsubject = await exerciceModel.find({ subject: "Arabic" });
  res.json(listsubject);
});

router.get("/French", async (request, res) => {
  const list = await exerciceModel.find({ subject: "French" });
  res.json(list);
});

router.get("/English", async (request, res) => {
  const liste = await exerciceModel.find({ subject: "English" });
  res.json(liste);
});

router.get("/Mathematique", async (request, res) => {
  const listm = await exerciceModel.find({ subject: "Mathematique" });
  res.json(listm);
});

router.get("/Sciences", async (request, res) => {
  const lists = await exerciceModel.find({ subject: "Science of life and earth" });
  res.json(lists);
});

router.get("/Social", async (request, res) => {
  const listss = await exerciceModel.find({ subject: "Social science" });
  res.json(listss);
});

//liste des lessons

router.get("/listLessons", async (request, res) => {

  const listss = await lessonModel.find();

  res.json(listss);

});

/*
router.post('/add', uplaod.single('type'), async (request, response)  =>{
  console.log(request.file);
  //var lesson = new lessonModel;
  //const id = lesson.findById(req.params.id, (err, doc) => {
  //});
  
  const exercice=new exerciceModel({
    title: request.body.title,
    type: request.file.filename,
    level:request.body.level,
    price:request.body.price,
    description: request.body.description,
    subject: request.body.subject,
    createdAt:Date.now(),
    modifiedAt:Date.now(), 
  });


  try {
     await exercice.save();
     return response.json(exercice);
  } catch (error) {
    console.log(error);
  }
 
});

*/
//modifier
router.put("/update/:id", async (req, res) => {
  try {
    const { title, typeR, description, subject, correction } = req.body;
    let exerciceFields = {};
    if (title) exerciceFields.title = title;
    if (typeR) exerciceFields.typeR = typeR;
    if (description) exerciceFields.description = description;
    if (subject) exerciceFields.subject = subject;
    if (correction) exerciceFields.subject = correction;

    exercice
      .findByIdAndUpdate(req.params.id, {
        $set: exerciceFields,
      })
      .then((result) => {
        res.status(200).json("updated successfully !");
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch (error) {
    return res.status(500).json("error !");
  }
});

router.get("/list", async (request, res) => {
  const myList = await exerciceModel
    .find()
    .populate({ path: "lesson", select: "title type level Exercices" });
  res.json(myList);
});

//affifer un exercice
router.get("/:id", (req, res) => {
  exerciceModel
    .findOne({ _id: req.params.id })
    .populate("lesson")
    .then(function (exercice) {
      res.json(exercice);
    })
    .catch(function (err) {
      res.json(err);
    });
});

//delete
router.delete("/delete/:id/:idLesson", async (req, res) => {
  try {
    await exerciceModel.findByIdAndRemove(req.params.id);
    const lesson = await lessonModel.findOneAndUpdate(req.params.idLesson, {
      $pull: {
        Exercices: {
          _id: req.params.id,
        },
      },
    });
    res.send(lesson);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/*
router.post("/lesson/:id", upload.single('type'), async (req, res)=>{
  // Create a new note and pass the req.body to the entry
    const exercice = new exerciceModel({  title: req.body.title,
    type: req.file.filename,
    level:req.body.level,
    price:req.body.price,
    description: req.body.description,
    subject: req.body.subject,
    createdAt:Date.now(),
    modifiedAt:Date.now(),
    lesson: req.params._id })
    .then(function(listeR) {
      // If an exercice was created successfully, find one lesson with an `_id` equal to `req.params.id`. Update the lesson to be associated with the new ex
      // { new: true } tells the query that we want it to return the updated lesson -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      
      return lesson.findOneAndUpdate({ _id: req.params.id }, {$push: {Exercices: listeR}}, { new: true });
    })
    .then(function(Lesson) {
      // If we were able to successfully update a lesson, send it back to the client
      res.json(Lesson);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});0

*/

//this
router.post("/addExercice/", upload.single("type"), async (req, res) => {
  try {
    const exercice = new exerciceModel({
      title: req.body.title,
      subject: req.body.subject,
      level: req.body.level,
      price: req.body.price,
      description: req.body.description,
      type: req.file.filename,
      lesson:req.body.Lesson,
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      //teacher:req.params.user._id
    });
    console.log(req.body);
   
    exercice.lesson = req.body.lesson;
    await exercice.save();
    //chercher id par lesson et push exercice
    const lesson = await lessonModel.findOneAndUpdate(
      { _id: exercice.lesson },
      { $push: { Exercices: exercice } }
    );
    
    console.log(lesson);
    
    
  //return new exercice object, after saving it to lesson
    res.status(200).json({ success: true, data: exercice });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
    console.log(err);
  }
});





router.get("/filterlevelsubject/arabic/:user", async (request, res) => {
  const listsubject = await exerciceModel.find({
    subject: "Arabic",
    level: request.params.user.level,
    teacher: request.params.user._id,
  });
  res.json(listsubject);
});

/*

router.post("/addExercice/:id",async (req, res)=>{

  try {
    const exercice = new exerciceModel(req.body);
     console.log(req.body);
     // exercice.lesson = lesson._id; <=== Assign user id from signed in publisher to publisher key
     exercice.lesson = req.params.id
     await exercice.save();
     const lesson = await lessonModel.find({_id: exercice.lesson});
     if(!lesson){
       res.status(400).send({msg:"lesson not found"})
     }
     await lessonModel.updateOne({_id:lesson._id},{$push:{Exercices:exercice}})
    //  lesson.Exercices.push(exercice);
    //  await lesson.save();

     //return new exercice object, after saving it to lesson
     res.status(200).json({success:true, data: lesson })


  } catch (err) {
     res.status(400).json({success: false, message:err.message})
     console.log(err)
  }
})

*/
module.exports = router;
