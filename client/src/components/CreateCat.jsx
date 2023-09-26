import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function CreateCat() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

   
    const formData = new FormData(event.target);
    const catData = {};
    formData.forEach((value, key) => {
      catData[key] = value;
    });

    //sends to backend
    axios
      .post("/api/cats/new", catData)
      .then((res) => {
        
        console.log("Cat added:", res.data);

        navigate('/cats');
        
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding cat:", error);
      });
  };
  return (
    <div>
      <h1>Build Your Cat Portfolio</h1>
      <form onSubmit={handleSubmit} action="/api/cats" method="POST">
        <div>
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Breed</label>
          <select name="breed" required>
            <option>Domestic Shorthair </option>
            <option>Siamese </option>
            <option>British Shorthair </option>
            <option>Maine Coon </option>
            <option>Persian </option>
            <option>Ragdoll </option>
            <option>Sphynx</option>
            <option>American Shorthair</option>
            <option>Abyssinian </option>
            <option>Exotic Shorthair</option>
            <option>Scottish Fold</option>
            <option>Burmese</option>
            <option>Birman</option>
            <option>Bombay</option>
            <option>Siberian</option>
            <option>Norwegian Forest</option>
            <option>Russian Blue</option>
            <option>American Curl</option>
            <option>Munchkin</option>
            <option>American Bobtail</option>
            <option>Balinese</option>
            <option>Devon Rex</option>
            <option>Oriental Shorthair</option>
            <option>Chatreux</option>
            <option>Turkish Angora</option>
            <option>Manx</option>
            <option>Japanese Bobtail</option>
            <option>American Wirehair</option>
            <option>Ragamuffin</option>
            <option>Egyptian Mau</option>
            <option>Somali</option>
            <option>Comish Rex</option>
            <option>Himalayan</option>
            <option>Selkirk Rex</option>
            <option>Korat</option>
            <option>Singapura</option>
            <option>Tonkinese</option>
            <option>Ocicat</option>
            <option>Turkish Van</option>
            <option>British Longhair</option>
            <option>LaPerm</option>
            <option>Havana Brown</option>
            <option>Chausie</option>
            <option>Burmilla</option>
            <option>Toyger</option>
            <option>Snowshoe</option>
            <option>Sokoke</option>
            <option>Lykoi</option>
            <option>Colorpoint Shorthair</option>
            <option>Javanese</option>
            <option>Austrialian Mist</option>
            <option>Khao Manee</option>
          </select>
        </div>

        <div>
          <label> Gender:</label>

          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value="male" id="male" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" value="female" id="female" />
        </div>

        <div>
          <label>Neutered/Spayed: </label>

          <label htmlFor="yes">Yes</label>
          <input type="radio" name="fixed" value="true" id="yes" />

          <label htmlFor="no">No</label>
          <input type="radio" name="fixed" value='false' id="no" />
        </div>

        <div>
          <label>Weight (lb) </label>
          <input type="number" name="weight" required/>
        </div>
        <div>
          <label>Age (years)</label>
          <input type="number" name="age" required/>
        </div>

        <div>
          <label>Cat Body Condition</label>
          <a href="https://wsava.org/WSAVA/media/Documents/Committee%20Resources/Global%20Nutrition%20Committee/English/Body-Condition-Score-cat.pdf"> Need help determining?</a>
          <input type="number" name="bodyCondition" required/>
        </div>

        <input type="submit" value='ADD'/>
      </form>
    </div>
  );
}
