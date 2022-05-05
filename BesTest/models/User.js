const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  kid: [{ type: Schema.Types.ObjectId, ref: "user", default: null }],
  parent: { type: Schema.Types.ObjectId, ref: "user", default: null },
  lastname: String,
  firstname: String,
  typeuser: String,
  password: String,
  matricule: String,
  level: String,
  email: String,
  createdAt: Date,
  address: String,
  rib: Number,
  Exercices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercice",
      default:null
    },
  ],
  Lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "lesson",
      default:null
    },
  ],
  Exams: [
    {
      type: Schema.Types.ObjectId,
      ref: "examen",
      default:null
    },
  ],
});

module.exports = User = mongoose.model("user", UserSchema);
