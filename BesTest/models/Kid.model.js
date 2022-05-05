var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kid = new Schema({
    lastname: String,
    firstname: String,
    password: String,
    matricule: String,
    email: String,
    createdAt: Date,
    address: String,
    score: Number,
    birthday: String,
    level: String,
    parent: {
        type: Schema.Types.ObjectId, 
        ref:"parents", 
    }
});


module.exports= mongoose.model('kid',kid);