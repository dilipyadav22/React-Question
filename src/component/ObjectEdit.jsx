import React, { useState } from 'react'

const ObjectEdit = () => {
const [movie, setMovie] = useState({
    title:"Web Series",
    rating:7
})

const handelChange=()=>{
    // const copy={
    //     ...movie,
    //     rating:9,
    // }

    // setMovie(copy);
// Both type we can do
    setMovie({...movie,rating:8})

}

  return (
    <div>
       
              
                <h4>Title:{movie.title}</h4>
                <h3>Rating:{movie.rating}</h3>
              <button onClick={handelChange} >Change Rating</button>
            
    </div>
  )
}

export default ObjectEdit