var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var parent = new Schema({
    lastname: String,
    firstname: String,
    password: String,
    typeuser:String,
    matricule: String,
    email: String,
    createdAt: Date,
    address: String,
    rib: Number,
    kids:[{
        type: Schema.Types.ObjectId,
        ref:"kid",
        default:null
    }],
});


module.exports = mongoose.models.parents || mongoose.model('parents', parent);