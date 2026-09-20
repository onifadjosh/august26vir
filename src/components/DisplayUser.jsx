import React, { useState } from 'react'
import UserCard from './UserCard'

const DisplayUser = ({allUsers, deleteUser, editUser}) => {

    const [firstname, setfirstname] = useState("")
      const [lastname, setlastname] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
      const [currentIndex, setcurrentIndex] = useState(null)
  return (
    <div>
         <div className="d-flex gap-2 flex-wrap">
          {allUsers.map((user, index)=>{
         return <div className="card" style={{width: "18rem"}} key={index}>
            <UserCard user={user} index={index} deleteUser={deleteUser} currentIndex={currentIndex}/>
          </div>
})}
        </div>


        <h1>{currentIndex}</h1>

     





<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" placeholder="firstname" onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text" placeholder="lastname"  onChange={(e)=>setlastname(e.target.value)}/>
        <input type="email" placeholder="email"  onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>editUser(currentIndex, {firstname, lastname, email, password})} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DisplayUser