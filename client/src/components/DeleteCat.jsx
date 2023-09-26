import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteCat() {

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleDelete = () => {
    // Send a DELETE request to your backend to delete the cat by ID
    axios
      .delete(`/api/cats/${cat._id}`)
      .then(() => {
        // Use navigate to go to a page (e.g., the Cats list) after successful deletion
        navigate("/cats");
      })
      .catch((error) => {
        console.error("Error deleting cat:", error);
      });
  };

  return (
    <div>
      <h2>Delete Cat</h2>
      <p>Are you sure you want to delete this cat?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteCat;
