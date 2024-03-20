import React, { useEffect, useState } from 'react'

function Effcet() {
    const [counter1,setCounter1]= useState(0)

    useEffect(()=> {
        console.log('use effecr executing')

    },[counter1])
  return (
    <div>
    <h1>{counter1}</h1>
    <button onClick={()=> setCounter1(counter1 + 1)}>Increment 1</button>
    
</div>
  
  )
}

export default Effcet