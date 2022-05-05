var express = require('express');
var router = express.Router();
//var examen = require('../models/examen.model');
var bodyParser = require('body-parser');
const multer = require('multer')
const examModel = require('../models/examen.model');
const User = require("../models/User")
var mongoose = require('mongoose')

//define storage for the images
const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, 'uploads/');
  },

//add back the extension
filename: function (request, file, callback) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  callback(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
},
});
//upload parameters for multer
const upload = multer({
  storage: storage,

});


/* Ajouter examen.*/
router.post('/:user', upload.single('type'), async (request, response) => {
  console.log(request.file);

  id = mongoose.Types.ObjectId(request.params.user);

  const us= await User.findOne({_id:id});

 const exam = new examModel({
    type: request.file.filename,
    subject: request.body.subject,
  level:us.level, 
      title: request.body.title,
    price: request.body.price,
    createdAt:Date.now(),
    teacher:us._id,

    // teacher:request.body.user._id,

  });

  try {
     await exam.save();

     response.json(exam);
  } 
  catch (error) {
    console.log(error);
  }
});

router.get('/read', async (request, res) => {
  examModel.find({}, (err,result) => {
    if (err) { 
      res.send(err);
    }
    res.send(result);
  })

 
});

//afficher par subject et level
router.get('/examsByLevelSubject', async (request, res) => {
  examModel.find({level:request.body.level,subject:request.body.subject}, (err,result) => {
    if (err) { 
      res.send(err);
    }
    res.send(result);
  })

 
});

//afficher par level
router.get('/examsByLevel', async (request, res) => {
  examModel.find({level:request.body.level}, (err,result) => {
    if (err) { 
      res.send(err);
    }
    res.send(result);
  })

 
});

//afficher par subject
router.get('/examsByarabic/:user', async (request, res) => {
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
const listsubject = await examModel.find({subject:"Arabic", level:us.level})  
res.json(listsubject);
}
else if(us.typeuser=="PARENT"){ 
  console.log(us.typeuser)
 const listsubject = await examModel.find({subject:"Arabic", level:kids[0].level}) 
res.json(listsubject);
}
} catch (err) {
console.error(err.message);
 res.status(500).send('Server error');
}

});

router.get('/examsBymathematics/:user', async (request, res) => {
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
    const listsubject = await examModel.find({subject:"Mathematique", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await examModel.find({subject:"Mathematique", level:kids[0].level}) 
   res.json(listsubject);
  }
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }
   });


router.get('/examsByfrench/:user', async (request, res) => {
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
    const listsubject = await examModel.find({subject:"French", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await examModel.find({subject:"French", level:kids[0].level}) 
   res.json(listsubject);
  }
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }
   });

router.get('/examsByenglish/:user', async (request, res) => {
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
  const listsubject = await examModel.find({subject:"English", level:us.level})  
  res.json(listsubject);
  }
  else if(us.typeuser=="PARENT"){ 
    console.log(us.typeuser)
   const listsubject = await examModel.find({subject:"English", level:kids[0].level}) 
 res.json(listsubject);
}
} catch (err) {
console.error(err.message);
   res.status(500).send('Server error');
 }


 });

router.get('/examsBysciences/:user', async (request, res) => {
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
  const listsubject = await examModel.find({subject:"Sciences of life and earth", level:us.level})  
  res.json(listsubject);
  }
  else if(us.typeuser=="PARENT"){ 
    console.log(us.typeuser)
   const listsubject = await examModel.find({subject:"Sciences of life and earth", level:kids[0].level}) 
 res.json(listsubject);
}
} catch (err) {
console.error(err.message);
   res.status(500).send('Server error');
 }
 });


router.get('/examsBysocials/:user', async (request, res) => {
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
    const listsubject = await examModel.find({subject:"Social Science", level:us.level})  
    res.json(listsubject);
    }
    else if(us.typeuser=="PARENT"){ 
      console.log(us.typeuser)
     const listsubject = await examModel.find({subject:"Social Science", level:kids[0].level}) 
   res.json(listsubject);
  }
} catch (err) {
  console.error(err.message);
     res.status(500).send('Server error');
   }

   });



//afficher liste des examens
// router.get('/list', function (req, res) {
//   examen.find(function (err, examen) {   //tableau des examens
//     if (err) {
//       console.error(err);
//       return;
//     } else {
//       return res.status(200).json(examen)

//     }
//   })
// })

router.get('/:id', (req, res) => {
  examen.findById(req.params.id, (err, doc) => {
    if (!err) {
      return res.status(200).json(doc)
    }
    else {
      console.error(err);
      return

    }


  });
});

router.put(
  "/update/:id",
  async (req, res) => {
    try {

      const {
        type,
        subject,
        title,
        
      } = req.body;
      let examenFields = {};
      if (type) examenFields.type = type;
      if (subject) examenFields.subject = subject;
      if (title) examenFields.title = title;

      examen.findByIdAndUpdate(req.params.id, {
        $set: examenFields,
      })
        .then((result) => {
          res.status(200).json("updated successfully !");
        })
        .catch((error) => {
          return res.status(500).json(error.message);
        });
    }

    catch (error) {
      return res.status(500).json("error !");
    }
  }
);



   
router.get('/filterlevelsubject/arabic/3eme' , async(request,res)=>{
  const listsubject = await examModel.find({subject:"Arabic",level:"3 class"})  
  res.json(listsubject);
 });


module.exports = router;