var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var parentRequest = new Schema({
    lastname: String,
    firstname: String,
    typeuser:String,
    password: String,
    level:String,
    email: String,
    createdAt: {type:Date,default:new Date()},
    address: String,
    rib: Number  
});


module.exports= mongoose.model('parentRequest',parentRequest);