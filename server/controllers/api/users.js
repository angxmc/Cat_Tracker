const User = require("../../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//create a new user in database
async function create(req, res) {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
    // console.log(user);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}
async function login(req, res) {
  try {
    // find a user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();

    // comparing password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();

    // create new token
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
async function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}
//helper function to create a jwt token
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

//creating an object to export multiple functions
module.exports = {
  create,
  login,
  checkToken,
};
