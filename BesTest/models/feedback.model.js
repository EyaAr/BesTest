var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var feedback = new Schema({
    description: String,
    createdAt: Date   
});

module.exports= mongoose.model('feedback',feedback);