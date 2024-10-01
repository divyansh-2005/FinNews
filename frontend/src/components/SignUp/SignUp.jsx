import React, { useState} from 'react'
import { useRef } from 'react'
import "./SignUp.css"
function SignUp() { 
  let emailinput=useRef();
  let passwordinput=useRef();
  const [email,setemail]=useState(false)
  const [password,setPassword]=useState(false)
  return (
    <>
      <div className='container'>
           <div className='card'>
                  <h1>Sign Up</h1>
                  <p className='info'>Enter your credentials to create your account</p>
                  <label htmlFor="email" >Email</label>
            <div className='mb-1 p-0'>
                <input type="text" ref={emailinput} className='email' id='email' placeholder='johndoe@example.com' /><br />
                {email  && <p className='warning'>Email is required</p> }
            </div>
            <label htmlFor="password" className='font-medium'>Password</label><br />
            <div className='p-0 mb-1 '>
                  <input type="password" ref={passwordinput} className='password' id='password'  /><br />
                  {password && <p className='warning'>Password is required</p> }
            </div>
                  <button onClick={()=>{
                     if(emailinput.current.value==''){
                          setemail(true);
                          setTimeout(() => {
                           setemail(!true);
                        }, 3000);
                        return ;
                      }
                       if(passwordinput.current.value==''){
                                  setPassword(true);
                                  setTimeout(() => {
                                     setPassword(!true);
                                  }, 3000);
                                  return ;
                                }
                  }} className=' btn'>Sign Up</button>
                  <p className='query'>Already have an account?Sign In</p>
           </div>
      </div>
    </>
  )
}

export default SignUp