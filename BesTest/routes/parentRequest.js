var express = require('express');
var router = express.Router();
var parentR=require('../models/parentRequest.model');
var parent=require('../models/parent.model');
// var kid=require('../models/kid.model');
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

router.get('/', function(req, res, next) {
    res.render('parent');
  });
 
/* Ajouter parent. */
router.post('/AddParent', async(req, res,next) =>{
    try {
        console.log(req.body)
        const newparent = new parentR({firstname:req.body.firstname,
            lastname:req.body.lastname, 
            typeuser:req.body.typeuser,
            password:req.body.password,
            address:req.body.address,
            email:req.body.email,
            rib:req.body.rib,
            createdAt:Date.now()
        })
        // Hash password
    const hashedpassword = bcrypt.hashSync(newparent.password, salt);
    newparent.password = hashedpassword
        await newparent.save()
      res.send({msg:"Parent added"})
    } catch (error) {
        console.log(error)
    }
});

//afficher liste des parents
router.get('/listPR', function(req, res){
    parentR.find(function(err,parents){   //tableau de parents
        if(err){
            console.error(err);
            return; 
        } res.render('listparent', {listParent:parents}) // objet tableau pour l utiliser dans la for twig  
    })
})

router.get('/:id', (req, res) => {
    parentR.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("parent", {
                parentR: doc
            });
        }
    });
});

router.get('/getkids/:id', (req, res) => {
    parent.findById({_id:req.params.id}, {kids: 1 },function(err,parent){   //tableau 
        if(err){
            console.error(err);
            return; 
        } res.json(parent) // objet tableau pour l utiliser dans la for twig  
    }).populate("kids");
    
      });

module.exports = router;
