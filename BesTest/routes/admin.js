var express = require("express");
var router = express.Router();
var admin = require("../models/admin.model");
var teacherR = require("../models/teacherRequest.model");
var teacher = require("../models/teacher.model");
var parentR = require("../models/parentRequest.model");
var kidModel = require("../models/kid.model");
const User = require("../models/User");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const nodemailer = require("nodemailer");
var mongoose = require('mongoose');

// const nodemailer = require('../lib/nodemailer');

async function main(mail,msg) {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(
  {
    service:"gmail",
    auth:{
      user:"BesTest2022@gmail.com",
      pass:"BT24042022"
    },
    tls:{
      rejectUnauthorized:false,
    }
  }
    );

    // Message object
    let message = {
        from:"BesTest2022@gmail.com",
        to: mail,
        // Subject of the message
        subject: 'BestTest Validation',
        // plaintext body
        text: msg,
        }


    await transporter.sendMail(message,(error,success)=>{
    if(error){
      console.log(error)
    }else{
      console.log("Email sent successfully!")
    }
    });
    transporter.close();
}

router.get("/", function (req, res, next) {
  res.render("admin");
});

/* Ajouter admin. */
router.post("/", (req, res, next) => {
  //    ajout(req, res);
  // console.log(req.body);
  new admin({
    matricule: req.body.matricule,
    password: req.body.password,
    email: req.body.email,
    createdAt: Date.now(),
  }).save(function (err, msg) {
    res.redirect("/admin/listA");
    console.log(msg);
  });
});

//afficher liste des admins
router.get("/listA", function (req, res) {
  admin.find(function (err, admins) {
    //tableau de admins
    if (err) {
      console.error(err);
      return;
    }
    res.render("index", { listAdmin: admins }); // objet tableau pour l utiliser dans la for twig
  });
});

/*get admin by ID */
router.get("/:id", function (req, res) {
  admin
    .findOne({ _id: req.params.id })
    .then(function (admin) {
      res.json(admin);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  admin.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/admin/listA");
    } else {
      console.log("Error in employee delete :" + err);
    }
  });
});

//update admin
router.get("/update/:id", (req, res) => {
  admin.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("admin/listA");
      } else {
        if (err.matricule == "ValidationError") {
          handleValidationError(err, req.body);
          res.render("admin", {
            //  viewTitle: 'Update Employee',
            admin: req.body,
          });
        } else console.log("Error during record update : " + err);
      }
    }
  );
});





/* liste teachers validés. */

router.get("/listT/valides", async (request, res) => {
  const myList = await User.find({ typeuser: "TEACHER" }).populate("kid");
  res.send(myList);
});

router.get("/listT/forparent/:user", async (request, res) => {

  id = mongoose.Types.ObjectId(request.params.user);
  const us= await User.findOne({_id:id});
  // const idkid=us.kid;
  let kids= await User.find({parent:us._id});

console.log(kids)

console.log(kids[0].level);
const myList = await User.find({ typeuser: "TEACHER", level:kids[0].level})

  res.send(myList);
  console.log(myList)
});


/* liste requettes teachers. */
router.get("/listreq/teacher", async (req, res) => {
  try {
    const findteachers = await teacherR.find();
    res.status(200).send({ teachers: findteachers });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "cannaot get teachers" }] });
  }
});
/* validate teacher. */
router.get("/validateT/:id", async (req, res, next) => {
  teacherR.findById(req.params.id, (err, doc) => {
    if (!err) {
      // console.log(doc);
      new User({
        lastname: doc.lastname,
        firstname: doc.firstname,
        password: doc.password,
        matricule: doc.matricule,
        email: doc.email,
        createdAt: doc.createdAt,
        address: doc.address,
        typeuser: "TEACHER",
        rib: doc.rib,
        level:doc.level,
      }).save(function (err, msg) {
        teacherR.findByIdAndRemove(req.params.id, (err, doc) => {
          if (!err) {
            console.log("success :" + err);
          } else {
            console.log("Error in teacher delete :" + err);
          }
        });
      });
      // console.log(doc.email)
      main(doc.email,"Your request has been aproved, you have access to BesTest").catch(err => {
        console.error(err.message);
        process.exit(1);
    });
      
    }
  });
});


router.get("/getT/:id", function (req, res) {
  teacherR
    .findOne({ _id: req.params.id })
    .populate("Exercices", "Lessons")
    .then(function (teacher) {
      res.json(teacher);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// delete teacher request
router.delete("/deleteT/:id", (req, res) => {
  teacherR.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      // res.redirect("/admin/listrequestT");
      main(doc.email,"Your request has been denied").catch(err => {
        console.error(err.message);
        process.exit(1);
    });
    } else {
      console.log("Error in teacher delete :" + err);
    }
  });
});

// delete teacher validé
router.delete("/deleteTeacher/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {

    } else {
      console.log("Error in teacher delete :" + err);
    }
  });
});


/* liste requettes parents. */
router.get("/listrequestP/parent", async (req, res) => {
  try {
    const findparents = await parentR.find();
    res.status(200).send({ parents: findparents });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot get parents" }] });
  }
});


/* validate parent. */
router.get("/validateP/:id", (req, res, next) => {
  // console.log(req.body);
  parentR.findById(req.params.id, (err, doc) => {
    if (!err) {
      new User({
        lastname: doc.lastname,
        firstname: doc.firstname,
        password: doc.password,
        email: doc.email,
        createdAt: doc.createdAt,
        typeuser: "PARENT",
        address: doc.address,
        rib: doc.rib,
      }).save(function (err, msg) {
        // console.log(err)
        parentR.findByIdAndRemove(req.params.id, (err, doc) => {
          if (!err) {
            console.log("success :" + err);
          } else {
            console.log("Error in parent delete :" + err);
          }
        });
      });
      main(doc.email,"Your request has been aproved, you have access to BesTest").catch(err => {
        console.error(err.message);
        process.exit(1);
    });
    }
  });
});

//liste parents validés
router.get("/listPV/valider", async (request, res) => {
  const myList = await User.find({ typeuser: "PARENT" }).populate("kid");
  res.send(myList);
});


//delete parent request
router.delete("/deleteP/:id", (req, res) => {
  parentR.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      main(doc.email,"Your request has been denied").catch(err => {
        console.error(err.message);
        process.exit(1);
    });
    } else {
      console.log("Error in parent delete :" + err);
    }
  });
});


//delete parent validés
router.delete("/deleteParent/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {

    } else {
      console.log("Error in teacher delete :" + err);
    }
  });
});


/* validate Kid. */
router.get("/validateK/:id", (req, res, next) => {
  console.log(req.body);
  kidModel.findById(req.params.id, (err, doc) => {
    if (!err) {
      new User({
        lastname: doc.lastname,
        firstname:doc.firstname,
        password:doc.password, 
        matricule:doc.matricule, 
        email:doc.email, 
        typeuser:"STUDENT",
        createdAt:Date.now(),
        address:doc.address, 
        birthday:doc.birthday, 
        level:doc.level,
        parent:doc.parent
      }).save(function (err, msg) {
        console.log(err)
        kidModel.findByIdAndRemove(req.params.id, (err, doc) => {
          if (!err) {
            console.log("success :" + err);
          } else {
            console.log("Error in kid delete :" + err);
          }
        });
      });
      main(doc.email,"Your request has been aproved, you have access to BesTest").catch(err => {
        console.error(err.message);
        process.exit(1);
    });
    }
  });
});


//delete kid request
router.delete('/deletek/:id', async(req, res) => {
  kidModel.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {

    } else {
      console.log("Error in kid delete :" + err);
    }
  });
});

//delete kid validé
router.delete("/deleteKid/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {

    } else {
      console.log("Error in kid delete :" + err);
    }
  });
});

module.exports = router;
