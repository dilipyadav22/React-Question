import React, { useState } from 'react'
import Greet from './component/Greet'
import Product from './component/Product'
import MapMethod from './component/MapMethod'
import PropsMethode from './component/PropsMethode'
import Weather from './component/Weather'
import CartItem from './component/CartItem'
import UserStatus from './component/UserStatus'
import TimetoDay from './component/TimetoDay'
import CRUDArr from './component/CRUDArr'
import ObjectEdit from './component/ObjectEdit'
import AllMoviePrint from './component/AllMoviePrint'
import SahreState from './component/SahreState'
import InUseStateCallBack from './component/InUseStateCallBack'

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
     <br></br><br></br>
     <CRUDArr/>
     <br></br>
     <ObjectEdit/>

     <AllMoviePrint/>

     <br/>
     <SahreState/>
     <br/>
     <InUseStateCallBack/>
    </div>
  )
}

export default App