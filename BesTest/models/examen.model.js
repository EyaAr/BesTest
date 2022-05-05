var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var examen = new Schema({
    type: String,
    subject: String,
    title: String,
    level: String,
    price: Number,
    createdAt: Date, 
    teacher: {
        type: Schema.Types.ObjectId, 
        ref:"user", 
    }

});

module.exports= mongoose.model('examen',examen);