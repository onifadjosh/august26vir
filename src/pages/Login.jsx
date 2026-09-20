import React, { useState } from 'react'

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const subdeets=()=>{
  let user ={email}

  
    setemail("");
  }






  return (
    <div>
         <input type="email" placeholder='email' value={email}   onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='password' />
        <button onClick={()=>{subdeets()}}>Submit</button>

    </div>
  )
}

export default Login