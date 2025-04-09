import React, { useState } from 'react'
import Greet from './component/Greet'
import Product from './component/Product'
import MapMethod from './component/MapMethod'
import PropsMethode from './component/PropsMethode'
import Weather from './component/Weather'
import CartItem from './component/CartItem'
import UserStatus from './component/UserStatus'
import TimetoDay from './component/TimetoDay'

const App=()=> {

  return (
    <div>
     <Greet/>
     <Product/>
     <MapMethod/>
     <PropsMethode/>
     <Weather/>


     <CartItem/>

     <UserStatus/>
     <TimetoDay/>
    </div>
  )
}

export default App