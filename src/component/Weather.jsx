import React from 'react'

const ValidatePassword = ()=><h1>valid Password</h1>
const InvalidtePassword =()=><h1>Invalid password</h1>

const Weather = () => {
    // const pr = Number(prompt("enter the tem"));
    let pr=15;
  return (
    <>
    <h1>Weather </h1>
    <Display temperature={pr}  />
    <Password isValid={true}/>
    </>
  )
}

export default Weather;

const Password=({isValid})=>{
    if(isValid){
        return<ValidatePassword/>
    }
    else{
        return<InvalidtePassword/>
    }

}

const Display = ({temperature})=>{
    
    if(temperature<=15){
      return<p>Cold</p>
    }
    else if(temperature>15 && temperature<=25){
        return<p>Nice OutSide</p> 
      }
    else {
        return<p>Hot outside</p>
    }

}
