import React from 'react'
import SignUp from '../SignUp/SignUp.jsx'
import SignIn  from "../SignIn/SignIn.jsx"
import "./Auth.css"
function Auth() {
  return (
    <div className='main-container'>
        <SignUp></SignUp>
        <SignIn></SignIn>
    </div>
  )
}
export default Auth