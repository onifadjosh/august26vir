import React, { useState } from 'react'
import Button from './Button'

const AddUser = ({submitUser}) => {
     const [firstname, setfirstname] = useState("")
      const [lastname, setlastname] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
  return (
    <>
         <input type="text" placeholder="firstname" onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text" placeholder="lastname"  onChange={(e)=>setlastname(e.target.value)}/>
        <input type="email" placeholder="email"  onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>

        {/* <button onClick={submitUser}>submit</button> */}

        <Button oruko={"submit"} func={()=>submitUser({firstname, lastname, email, password})} color={"btn-success"}/>
    </>
  )
}

export default AddUser