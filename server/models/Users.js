const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

//salt round: how secure it would be
const SALT_ROUND = 6;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);



//pre-save hook
//this allows the hash to save instead of the plain text password the user inputs
userSchema.pre("save", async function (next) {
  //'this' is the user doc / if password has not been modified
  if (!this.isModified("password")) return next();

  //update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUND);
  return next();
});

module.exports = mongoose.model("User", userSchema);
