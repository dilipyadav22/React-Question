import React, { useState } from 'react'

const RandomNum = () => {

    const [randomNumber, setRandomNumber] = useState(()=>
        Math.floor(Math.random() * 100)
      
    )

    const handelChange=()=>{
        const newNumber= Math.floor(Math.random()*100)
        setRandomNumber(newNumber);
    }
  return (
    <div>
        <h1>RandomNum:{randomNumber}</h1>
        <button onClick={handelChange} >Generate Random Number</button>
        </div>
  )
}

export default RandomNum