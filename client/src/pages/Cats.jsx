import React from 'react'
import CreateCat from '../components/CreateCat'

export default function Cats({cats}) {
  return (
    <div>
      <h1>Cat Portfolio</h1>
      {/* <CreateCat/> */}
      <nav>
        <a href='/cats/new'>Add a new cat</a>
      </nav>
      
      <ul>
        {Cats.map((cat) => {
          return(
            <li key={cat._id} >
              <a href={`/cats/${cat._id}`}>
                <h2>{cat.name}</h2>
                <p>Breed: {cat.breed}</p>
                <p>Age: {cat.age}</p>

              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
