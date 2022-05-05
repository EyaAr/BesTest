var express = require("express");
var router = express.Router();
var teacherR = require("../models/teacherRequest.model");
var teacher = require("../models/teacher.model");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

router.get("/", function (req, res, next) {
  res.render("teacher");
});

/* Ajouter admin. */
router.post("/addTeacher", async (req, res, next) => {
  try {
    console.log(req.body.adress);
    const newteacher = new teacherR({ firstname:req.body.firstname,
      lastname:req.body.lastname, 
      typeuser:req.body.typeuser,
      password:req.body.password,
      matricule:req.body.matricule,
      level:req.body.level,
      address:req.body.address,
      email:req.body.email,
      rib:req.body.rib,
      createdAt:Date.now()});
    // Hash password
    const hashedpassword = bcrypt.hashSync(newteacher.password, salt);
    newteacher.password = hashedpassword;
    await newteacher.save();
    res.send({ msg: "Teacher request added" });
  } catch (error) {
    console.log(error);
  }
});

//afficher liste des admins
router.get("/listT", function (req, res) {
  teacherR.find(function (err, teachers) {
    //tableau de teachers
    if (err) {
      console.error(err);
      return;
    }
    res.render("listteacher", { listTeacher: teachers }); // objet tableau pour l utiliser dans la for twig
  });
});
module.exports = router;

router.get("/:id", (req, res) => {
  teacherR.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("teacher", {
        teacherR: doc,
      });
    }
  });
});

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
