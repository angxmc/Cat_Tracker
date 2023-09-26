const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
    lowercase: true,
  },
  gender: {
    type: String,
  },
  fix: {
    type: Boolean,
  },
  weight: {
    type: Number,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  bodyCondition: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Cats", catSchema);
