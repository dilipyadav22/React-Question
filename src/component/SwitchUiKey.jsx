import React, { useState } from 'react'

const SwitchUiKey = () => {
  const [sw, setSw] = useState(false);

  const handle=()=>{
    setSw(!sw);
  }

  return (
    <div>
      {
        sw ? (
          <span>Dark</span>
        ) :(
          <span>Light</span>
        )
      }

      <input type="text" key={sw?"dark":"light"} />
      {/* <button onClick={()=>setSw((sw)=>(!sw))} >Switch</button> */}
      <button onClick={handle} >Swith</button>
      </div>
  )
}

export default SwitchUiKey