// import { useState } from "react"
// import Button from "./components/Button"
// import AddUser from "./components/AddUser"
// import DisplayUser from "./components/DisplayUser"

// // bind form to states
// const App = () => {
  
//   const [allUsers, setallUsers] = useState([])
  

  
//  // const handleChange=(event)=>{
//   //   console.log("sade");

//   //   console.log(event.target.value);
//   //   setfirstname(event.target.value)
    
    
//   // }

//   const submitUser=(user)=>{
//     console.log("i am working");
//     // let user = {firstname, lastname, email, password}

//     // let fruits =["mango", "grape", "orange", "cherry"]
//     // let newFruits= [...fruits, "banana", "kiwi"]
//     // console.log(newFruits);
//     let newAllUsers= [...allUsers,user ]
//     setallUsers(newAllUsers)
    
//   }

//   const deleteUser=(index)=>{
//     const newAllUsers = [...allUsers]

//     newAllUsers.splice(index, 1)

//     setallUsers(newAllUsers)
//   }


//   const editUser=(index, user)=>{
//     const newAllUsers = [...allUsers]

//     let fruit = ["mango", "apple", "grape"]
//     fruit.splice(0,1) //deleting
//     newAllUsers.splice(index, 1, user)
//     setallUsers(newAllUsers)


//   }

//   const start=()=>{
//     alert("I started")
//   }

 
//   return (
//     <div>

//       {/* <Button oruko={"Start"} color={"btn-success"} func={start}/>
//       <Button oruko={"Stop"} stylee={{bg:"black", text:"white"}}/>
//       <Button oruko={"Ready"} color={"btn-warning"}/> */}
     
      



//         <br />
//        <AddUser submitUser={submitUser}/>


//         <hr />
//         {/* {allUsers.map(()=>{
//           return 
//         })} */}

//         <DisplayUser  allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>
       
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Effectt from './pages/Effectt'
import MakeRequest from './pages/MakeRequest'
import Formikk from './pages/Formikk'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Button oruko={"submit"} color={"btn-success"}/> */}
      <Routes>
        <Route index element={<Home/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/login' element={<Login/>}/>

        <Route path='/effectt' element={<Effectt/>}/>
        <Route path='/makerequest' element={<MakeRequest/>}/>
        <Route path='/formikk' element={<Formikk/>}/>

        {/* children routes/nested routes */}

        <Route path='/sp-contact' element={<Contact/>} />

        {/* programmatic redirection */}
        <Route path='/contact' element={<Navigate to={"/sp-contact"}/>}/>

        {/* dynamic routing */}
        <Route path='/profile/:username' element={<Profile/>}/>


        {/* wild card routing */}

        <Route path='*'  element={<Notfound/>}/>
      </Routes>

    <Footer/>

    </>
  )
}

export default App