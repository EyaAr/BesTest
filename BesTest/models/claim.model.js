var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var claim = new Schema({
    description: String,
    topic: String,
    createdAt: Date, 
    teacher: String


});

module.exports= mongoose.model('claim',claim);