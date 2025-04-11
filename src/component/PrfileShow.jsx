import React, { useState } from 'react'

const PrfileShow = () => {
    const [profile, setProfile] = useState({
        name:"",
        age:"",
    })

    const handleChange=(e)=>{
        const {name,value} = e.target;

        setProfile((prev)=>({
            ...prev,
            [name]:value,
        }))

    }

    const handleSubmit=()=>{
        e.preventDefault();

    }

  return (
    <div>
        <h1>Profile Show</h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name:
                <input type='text' name='name' value={profile.name} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label>Age:
                <input type='Number' name='age' value={profile.age} onChange={handleChange} />
                </label>
            </div>
        </form>

 
           
               <li>{profile.name}</li>
                 <li>{profile.age}</li>

    </div>
  )
}

export default PrfileShow