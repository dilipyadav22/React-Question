import React from 'react'

const UserStatus = () => {
  return (
    <Login login={true} isAdmin={true} />
  )
}

export default UserStatus;


const Login =({login,isAdmin})=>{
   
        if(login && isAdmin){
            return<h1>Welcome To Admin</h1>

        }
        else{
            return<h1>User Login</h1>
        }

}