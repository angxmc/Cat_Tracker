const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");


const Cats = require('./models/Cats');
const { default: CreateCat } = require("../client/src/components/CreateCat");

const app = express();
const PORT = process.env.PORT || 3001;

// -- middleware --

app.use(logger("dev"));
//this is so we can receive data
app.use(express.json());
//check for a token and create an req.user prop in request
app.use(require("./config/checkToken"));
console.log("__dirname:", __dirname);

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "..", "client", "dist", "vite.svg")));
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

//put API Routes here, before 'catch all' route
//mounting this routes that handles everything that comes to api/users
app.use("/api/users", require("./routes/api/users"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "dist"));
});

// -- ROUTES -------------------------------------

// == SHOW ALL CATS ==
app.get('/cats', async (req, res) =>{
  try{
    const cats = await Cats.find({});
    res.render('Cats', {cats})
  }catch(e){
    console.log(e);
  }
})

// == NEW ==
app.get('/cats/new',(req,res)=>{
  res.render(CreateCat)
})

// == SHOW DETAILS ==
app.get('/cats/:id', async (req, res)=>{
  const {id} = req.params;
  try{
    const cat = await Cats.findById(id);
    res.send('cat')
  } catch (e){
    console.log(e);
  }
})

// == EDIT ==

// --- API ROUTES ----

// == CREATE ==
app.post("/api/cats", async (req, res) => {
  const createdCat = await Cats.create(req.body);
  res.redirect('/cats')
})

//

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
