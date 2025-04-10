import React, { useState } from 'react'

const InUseStateCallBack = () => {
    const [count, setCount] = useState(()=>{
      const  initialCount =10
        return initialCount ;
    })
    const handle=()=>{
        setCount((prev)=>prev+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handle} >Increment</button>
    </div>
  )
}

export default InUseStateCallBack