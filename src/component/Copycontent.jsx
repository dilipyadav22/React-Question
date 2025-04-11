import React, { useState } from 'react'
import {createPortal} from 'react-dom'

const Copycontent = () => {
    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handle=()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),5000);
        })
    }

  return (
    <div>
        <h1>Copy Content</h1>
        <input type='text' name='' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Text' />
        <button onClick={handle} >Copy</button>
        <PageContent copied={copied} />
    </div>
    
  )
  
}

export default Copycontent


const PageContent =({copied})=>{

  return createPortal(
   <div>
    {copied && <p>Clip board content Copy Successfully</p>}
   </div>,
   document.querySelector('#popup-content')
  )
}