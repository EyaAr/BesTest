var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teacher = new Schema({
    lastname: String,
    firstname: String,
    password: String,
    typeuser:String,
    matricule: String,
    email: String,
    createdAt: Date,
    address: String,
    level: String,
    birthday: Date,
    rib: Number,
    Exercices:[{
        type: Schema.Types.ObjectId,
        ref:"Exercice"
    }],
    Lessons:[{
        type: Schema.Types.ObjectId,
        ref:"lesson"
    }],
    Exams:[{
        type: Schema.Types.ObjectId,
        ref:"examen"
    }]

});


module.exports= mongoose.model('teachers',teacher);