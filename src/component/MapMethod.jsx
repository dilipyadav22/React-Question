import React from 'react'

const MapMethod = () => {

 const user =[
    {
        name:"dilip",
        age:25,
        mail:"Y@gmail.com"
    },
    {
        name:"raju",
        age:25,
        mail:"Y@gmail.com"
    },
    {
        name:"sachin",
        age:25,
        mail:"Y@gmail.com"
    },
    {
        name:"Ranjeet",
        age:25,
        mail:"Y@gmail.com"
    },
]
  return (
    <div>
        {user.map(({name,age,mail})=>(
            <div key={Math.random()}>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <h4>{mail}</h4>
            </div>
        ))}
    </div>
  )
}

export default MapMethod