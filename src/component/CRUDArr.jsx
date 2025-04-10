import React, { useState } from 'react'

const CRUDArr = () => {
    const [friend, setFriend] = useState(["Dilip","Raju"]);

    const AddFrnd= ()=>setFriend([...friend,"Sachin"]);

    const RemoveFrnd=()=>setFriend(friend.filter((f)=> f !== "Raju"))

    const UpdateFrnd =()=>{
        setFriend(friend.map((f)=>f==="Dilip"?"Dilip yadav":f))
    }
  return (
    <div>
        {
            friend.map((f)=>(
                <li key={Math.random()} >{f}</li>
            ))
        }
        <button onClick={AddFrnd} >ADD more Frnd</button>
        <button onClick={RemoveFrnd} > Remove</button>
        <button onClick={UpdateFrnd} >Update</button>
    </div>
  )
}

export default CRUDArr