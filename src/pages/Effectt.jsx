import React, {  useEffect, useState } from 'react'

const Effectt = () => {
    const [name, setname] = useState("Josh")
    const [number, setnumber] = useState(0)

    useEffect(()=>{
        console.log("use effect ran");
        
    }, [name])

    //whenn there is no dep array, onload it runs, when any state changes it runs again
    //when there is empty dep array , use effect runs on load , when any state chnages it does not run
    //when there is a state in the dep array, onload it runs, when that state changes it runs again


    
  return (
    <div>
        <button onClick={()=>setname("Pampam")}>{name}</button>

        <button onClick={()=>setnumber(number+1)}>{number}</button>
    </div>
  )
}

export default Effectt