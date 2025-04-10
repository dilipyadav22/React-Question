import React, { useEffect, useState } from 'react'

const SetlocalandGet = () => {

    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    });

    useEffect(() => {
    
        localStorage.setItem('name', JSON.stringify(name));

    }, [name]);

    const handleChange=(e)=>{
        setName(e.target.value);
    }

    const handleSubmit=()=>{
        setName('');
    }
    


  return (
    <div>
        <h1>Your Name:{name}</h1>
        <input type='text' onChange={handleChange} value={name} name='name' placeholder='Enter Name'  />
        <button onClick={handleSubmit} >Clear</button>
    </div>
  )
}

export default SetlocalandGet