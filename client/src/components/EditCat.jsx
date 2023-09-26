import React, { useState, useEffect } from "react";
import axios from "axios";

function EditCat() {
  const [cat, setCat] = useState({
    name: "",
    breed: "",
    weight: "",
    age: "",
    calorieIntake: "",
  });

  useEffect(() => {
    // Fetch cat details by cat id from mongoose
    axios
      .get(`http://localhost:5173/api/cats/${cat._id}`)
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cat details:", error);
      });
  }, [cat._id]);

  //create a functioun to take the changes user put and update it to the key in the object

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat({ ...cat, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a PUT request to update the cat's details
    axios
      .put(`/api/cats/${cat._id}`, cat)
      .then((response) => {
        console.log("Cat details updated:", response.data);
        
      })
      .catch((error) => {
        console.error("Error updating cat details:", error);
      });
  };

  return (
    <div>
      <h2>Edit Cat Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={cat.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={cat.breed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            name="weight"
            value={cat.weight}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={cat.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Calorie Intake:</label>
          <input
            type="number"
            name="calorieIntake"
            value={cat.calorieIntake}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Cat</button>
      </form>
    </div>
  );
}

export default EditCat;
