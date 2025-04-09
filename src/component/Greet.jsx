import React from 'react'

const Greet = () => {
    const name = "Dilip";
    const lname = "yadav";
    const cname = "maaro";
  return (
    <div>
        <h1>{name}</h1>
        <p>{lname}</p>
        <p className={cname}> this is good for me. </p>



    </div>
  )
}

export default Greet