import React, { useContext } from 'react'

import {Data} from "../ContextApiUse"

const UsingContext = () => {

    const {name,age} = useContext(Data);
    

  return (
    <div>
        <h1>hey My name is :{name} age is {age}</h1>
    </div>
  )
}

export default UsingContext