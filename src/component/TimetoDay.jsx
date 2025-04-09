import React from 'react'

const TimetoDay = () => {
  return (
    <div>
        <DayPrint Day="morning" />
    </div>
  )
}

export default TimetoDay;

const DayPrint =({Day})=>{
   
    return Day=="morning" ? 
        (<h1>Good Morning</h1>)
        :
        (<h1>Good afternoon</h1>)

    // if(Day==="morning"){
    //     return <h1>Good Morning</h1>
    // }
    // else{
    //     return <h1>Goodafternoon</h1>

    // }

}