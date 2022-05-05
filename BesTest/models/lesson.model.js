var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lesson = new Schema({
    title: String,
    subject: String,
    level: String,
    price: Number,
    type: String,
    description: {type: String, required: false},
    createdAt: Date, 
    Exercices:[{
        type: Schema.Types.ObjectId,
        ref:"Exercice"
    }],
    teacher: {
        type: Schema.Types.ObjectId, 
        ref:"user", 
    }
});

module.exports= mongoose.model('lesson',lesson);