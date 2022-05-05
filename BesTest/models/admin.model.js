var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var admin = new Schema({
    password: String,
    matricule: String,
    email: String,
    createdAt: Date   
});

module.exports= mongoose.model('admin',admin);