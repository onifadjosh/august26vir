import React from 'react'

const UserCard = ({user, deleteUser, index, currentIndex}) => {
  return (
   <div className="card-body">
              <h5 className="card-title">{user.firstname+" "+user.lastname}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
              <div className="d-flex gap-2">
                <button className="btn btn-danger" onClick={()=>deleteUser(index)}>Delete</button>
                <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setcurrentIndex(index)}>Edit</button>
              </div>
            </div>
  )
}

export default UserCard