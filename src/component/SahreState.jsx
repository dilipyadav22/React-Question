import React, { useState } from 'react'

const SahreState = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <Card1 count={count} onclickeHandler={()=>setCount(count+1)} />
        <Card2 count={count} onclickeHandler={()=>setCount(count-1)}/>
    </div>
  )
}

export default SahreState;

const Card1=({count,onclickeHandler})=>{

    // const handler=()=>{
    //     onclickeHandler();
    // }
return(
    <>
    <h1>{count}</h1>

    <button onClick={onclickeHandler} >++</button>
    </>
)
}

const Card2 =({count,onclickeHandler})=>{
    return(
        <>
        <h1>{count}</h1>
    
        <button onClick={onclickeHandler} >--</button>
        </>
    )

}