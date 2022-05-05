const express = require('express');
var router = express.Router();
const lessonModel=require('../models/lesson.model');
const exerciceModel=require('../models/exercice.model');
const User = require("../models/User")

var bodyParser = require('body-parser'); 
const multer = require('multer');
var mongoose = require('mongoose')



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
  
});
router.get('/', function(req, res, next) {
   res.render('lesson', { title: 'Express' });
  });

/* Ajouter lesson. */
router.post('/:user',upload.single('type'),async(req, res,next) =>{
    //    ajout(req, res);
        // console.log(req.file);
        // console.log(req.user);
        console.log(req.body);
        // console.log(req.body.user);
        id = mongoose.Types.ObjectId(req.params.user);

        const us= await User.findOne({_id:id});

   const lesson = new lessonModel({ 
    title: req.body.title,
        subject:req.body.subject,
        level:us.level, 
        price:req.body.price , 
        description:req.body.description,
        type:req.file.filename,
        createdAt:Date.now(),  
        teacher:us._id,
     });
    try {
      
 await lesson.save().then(function(lessons){
  return User.findByIdAndUpdate({_id:id}, 
    {$push: 
    {Lessons:lessons._id}}, {new:true});
    })
    res.json(lesson)
        // response.redirect('/');
      } catch (error) {
        console.log(error);
      }

     
});

router.post("/lesson/:id", function(req, res){
  exerciceModel.create(req.body).then(function(dbExercices){
return lessonModel.findByIdAndUpdate({_id:req.params.id}, 
  {$push: 
  {exercices:dbExercices._id}}, {new:true});
  })
  .then(function(dbLessons){
    res.json(dbLessons);
  })
  .catch(function(err){
  res.json(err);
  });
});


//get list exercices
router.get('/listE' , async(request,res)=>{
  const myList = await exerciceModel.find()
  res.json(myList);
 });

router.delete('/deleteL/:id', (req, res) => {
  lessonModel.findByIdAndRemove(req.params.id, (err, doc) => {

      console.log("Error in teacher delete :" + err);
    
  });
});

//afficher liste des lessons
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};


router.get('/listL/:level', async(request,res,config )=>{
    const {level} = request.params;
    const myList = await lessonModel.find({level}).populate("Exercices");
  res.json(myList);
})


router.get('/:id', function(req, res) {
  lessonModel.findOne({_id: req.params.id }).populate("Exercices")
  .then(function(Lesson){
    res.json(Lesson);
  })
.catch(function(err){
  res.json(err);
});
});

//get lesson by subject
router.get('/subject/:subject', async(req, res) => {
  
  lessonModel.find({subject: req.params.subject}, function(err,lessons){   //tableau 
    if(err){
        console.error(err);
        return; 
    } res.json(lessons) // objet tableau pour l utiliser dans la for twig  
}).populate("Exercices");

  });

  //get lesson by subject return title
router.get('/findlessonName', async(req, res) => {
  
  lessonModel.find({subject: "Arabic"}, {title: 1 },function(err,lessons){   //tableau 
    if(err){
        console.error(err);
        return; 
    } res.json(lessons) // objet tableau pour l utiliser dans la for twig  
})

  });


  router.get('/findlevel/:level', async(req, res) => {
  
    lessonModel.find({level: req.params.level}, function(err,lessons){   //tableau 
      if(err){
          console.error(err);
          return; 
      } res.json(lessons) // objet tableau pour l utiliser dans la for twig  
  }).populate("Exercices");
  
    });



//get exercices by lesson
router.get('/exbylesson/:id', async(req,res) =>{
  lessonModel.find({_id:req.params.id}, {Exercices: 1 },function(err,lessons){   //tableau 
    if(err){
        console.error(err);
        return; 
    } res.json(lessons) // objet tableau pour l utiliser dans la for twig  
}).populate("Exercices");

  });

  router.get('/filtrbyname/bysubject/:user' , async(request,res)=>{
    id = mongoose.Types.ObjectId(request.params.user);

    console.log(id)
    const us= await User.findOne({_id:id});
    console.log(us.typeuser)

  
    // console.log(kids[0].level)
    try {
      let kids= await User.find({parent:us._id});
      console.log(kids);

    if(us.typeuser=="STUDENT"){
      console.log(us.typeuser)
    const listsubject = await lessonModel.find({subject:"Arabic", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await lessonModel.find({subject:"Arabic", level:kids[0].level}) 
   res.json(listsubject);
  }
  else if(us.typeuser=="TEACHER"){ 
    console.log(us.typeuser)
   const listsubject = await lessonModel.find({subject:"Arabic", level:us.level, teacher:us._id}, ) 
 res.json(listsubject);
}
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }

   });

   
   router.get('/filtrbyname/english/:user' , async(request,res)=>{
    id = mongoose.Types.ObjectId(request.params.user);

    console.log(id)
    const us= await User.findOne({_id:id});
    console.log(us.typeuser)

  
    // console.log(kids[0].level)
    try {
      let kids= await User.find({parent:us._id});
      console.log(kids);

    if(us.typeuser=="STUDENT"){
      console.log(us.typeuser)
    const listsubject = await lessonModel.find({subject:"English", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await lessonModel.find({subject:"English", level:kids[0].level}) 
   res.json(listsubject);
  }
  else if(us.typeuser=="TEACHER"){ 
    console.log(us.typeuser)
   const listsubject = await lessonModel.find({subject:"English", level:us.level, teacher:us._id}, ) 
 res.json(listsubject);
}
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }


   });
     
   router.get('/filtrbyname/math/:user' , async(request,res)=>{
    id = mongoose.Types.ObjectId(request.params.user);

    console.log(id)
    const us= await User.findOne({_id:id});
    console.log(us.typeuser)

  
    // console.log(kids[0].level)
    try {
      let kids= await User.find({parent:us._id});
      console.log(kids);

    if(us.typeuser=="STUDENT"){
      console.log(us.typeuser)
    const listsubject = await lessonModel.find({subject:"Mathematique", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await lessonModel.find({subject:"Mathematique", level:kids[0].level}) 
   res.json(listsubject);
  }
  else if(us.typeuser=="TEACHER"){ 
    console.log(us.typeuser)
   const listsubject = await lessonModel.find({subject:"Mathematique", level:us.level, teacher:us._id}, ) 
 res.json(listsubject);
}
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }
   });


   router.get('/filtrbyname/french/:user' , async(request,res)=>{
    id = mongoose.Types.ObjectId(request.params.user);

    console.log(id)
    const us= await User.findOne({_id:id});
    console.log(us.typeuser)

  
    // console.log(kids[0].level)
    try {
      let kids= await User.find({parent:us._id});
      console.log(kids);

    if(us.typeuser=="STUDENT"){
      console.log(us.typeuser)
    const listsubject = await lessonModel.find({subject:"French", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await lessonModel.find({subject:"French", level:kids[0].level}) 
   res.json(listsubject);
  }
  else if(us.typeuser=="TEACHER"){ 
    console.log(us.typeuser)
   const listsubject = await lessonModel.find({subject:"French", level:us.level, teacher:us._id}, ) 
 res.json(listsubject);
}
  
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }
   });



   router.get('/filtrbyname/sciences/:user' , async(request,res)=>{
        id = mongoose.Types.ObjectId(request.params.user);

    console.log(id)
    const us= await User.findOne({_id:id});
    console.log(us.typeuser)
  
    // console.log(kids[0].level)
    try {
      let kids= await User.find({parent:us._id});
      console.log(kids);

    if(us.typeuser=="STUDENT"){
      console.log(us.typeuser)
    const listsubject = await lessonModel.find({subject:"Sciences of life and earth", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await lessonModel.find({subject:"Sciences of life and earth", level:kids[0].level}) 
   res.json(listsubject);
  }
  else if(us.typeuser=="TEACHER"){ 
    console.log(us.typeuser)
   const listsubject = await lessonModel.find({subject:"Sciences of life and earth", level:us.level, teacher:us._id}, ) 
 res.json(listsubject);
}
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }
   });



   router.get('/filtrbyname/social/:user' , async(request,res)=>{
    id = mongoose.Types.ObjectId(request.params.user);

    console.log(id)
    const us= await User.findOne({_id:id});
    console.log(us.typeuser)
  
    // console.log(kids[0].level)
    try {
      let kids= await User.find({parent:us._id});
      console.log(kids);

    if(us.typeuser=="STUDENT"){
      console.log(us.typeuser)
    const listsubject = await lessonModel.find({subject:"Social Science", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await lessonModel.find({subject:"Social Science", level:kids[0].level}) 
   res.json(listsubject);
  }
  else if(us.typeuser=="TEACHER"){ 
    console.log(us.typeuser)
   const listsubject = await lessonModel.find({subject:"Social Science", level:us.level, teacher:us._id}, ) 
 res.json(listsubject);
}
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }

   });




   //get ressources by level for teacher
   router.get('/filterlevelsubject/arabic/:user' , async(request,res)=>{
    const listsubject = await lessonModel.find({subject:"Arabic"})  
    res.json(listsubject);
   });


module.exports = router;