const express = require("express");
const router = express.Router();
const Cat = require("../../models/Cats");

// -- Show ALL cats
router.get("/", async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// -- CREATE a new cat --
router.post("/new", async (req, res) => {
  const { name, breed, gender, fix, weight, age, bodyCondition } = req.body;

  try {
    const cat = new Cat({
      name,
      breed,
      gender, 
      weight,
      fix,
      age,
      bodyCondition,
    });

    await cat.save();
    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -- Show Each Cat --
router.get('/cats/:id', async (req,res) => {
  const {id} =req.params
  try{
    const cat = await Cat.findById(id);
    if(!cat){
      return res.status(404).json({message:'Cat not found'})
    }

    res.json(cat);
  }catch(e){
    res.status(500).json({error: e.message})
  }
})

// -- EDIT cat ---
router.put("/cats/:id", async (req, res) => {
  const catId = req.params.id;
  const { name, breed, gender, fix, weight, age, bodyCondition } = req.body;

  try {
    const cat = await Cat.findByIdAndUpdate(
      catId,
      {
        name,
        breed,
        gender, // Update the gender based on user input
        fix, // Update the neutered/spayed status based on user input
        weight,
        age,
        bodyCondition,
      },
      { new: true } // Return the updated cat document
    );

    if (!cat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -- DELETE a cat :'( ----

router.delete("/cats/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the cat by ID and remove it
    const deletedCat = await Cat.findByIdAndRemove(id);

    if (!deletedCat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.json({ message: "Cat deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
