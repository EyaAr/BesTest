var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exercice = new Schema({
    title: String,
    type: String,
    level:String,
    price:Number,
    description: String,
    createdAt: Date,
    modifiedAt: Date,
    subject: String,
    lesson: {
        type: Schema.Types.ObjectId, 
        ref:"lesson", 
    }, 
    teacher: {
        type: Schema.Types.ObjectId, 
        ref:"teachers", 
    }
    
   
   
});

module.exports= mongoose.model('Exercice',exercice);