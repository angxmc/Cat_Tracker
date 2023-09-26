import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Cats() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    axios.get('api/cats').then((res) =>{
      setCats(res.data);
    })
    .catch((error) => {
      console.error('error fetching cat(s):', error);
    })
    
  },[])

   const handleDeleteCat = (catId) => {
     // Send a delete request to the server to delete the cat
     axios
       .delete(`/api/cats/${catId}`)
       .then(() => {
         // After successful deletion, update the cats list to reflect the change
         const updatedCats = cats.filter((cat) => cat._id !== catId);
         setCats(updatedCats);
       })
       .catch((error) => {
         console.error("Error deleting cat:", error);
       });
   };

  return (
    <div>
      <h1>Cat Portfolio</h1>
      {/* <CreateCat/> */}
      <nav>
        <a href='/cats/new'>Add a new cat</a>
      </nav>
      
      <ul>
        {cats.map((cat) => {
          return(
            <li key={cat._id} >
             <a href={`/cats/${cat._id}`}>{cat.name}</a>
             <button onClick={()=> handleDeleteCat(cat._id)}>{`Delete Cat :'( `}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
