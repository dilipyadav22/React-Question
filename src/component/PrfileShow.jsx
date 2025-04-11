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

        <ul>
           
               <li>{profile.name}</li>
                    <li>{profile.age}</li>
                
        </ul>
    </div>
  )
}

export default PrfileShow