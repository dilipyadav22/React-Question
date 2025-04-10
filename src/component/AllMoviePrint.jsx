import React, { useState } from 'react'

const AllMoviePrint = () => {
    const [movie, setMovie] = useState([
        {id:1 , Title:"pp",price:200},
        {id:2 , Title:"DD",price:400}

    ])

    const handleChange=()=>{
          setMovie(movie.map((m)=>m.id === 1 ? {...movie,Title:"ddudh"}:m))
        
    }

  return (
    <div>
        {
            movie.map((m)=>(
                <ul>
                    <li>{m.Title}</li>
                  </ul>
            ))

        }
        <button onClick={handleChange} >Change Title</button>

    </div>
  )
}

export default AllMoviePrint