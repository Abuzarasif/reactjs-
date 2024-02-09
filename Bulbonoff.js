import React, { useState } from 'react'

const Bulbonoff = () => {
  const [bulbon,setbulbon]=useState(true);
    return (
    <>
      <center>
        <h1>Hey! this is bulb on and off page </h1>
      </center>
      {bulbon===true?
      <img src="/bulbon.jpeg" alt="" />
     : <img src="/bulboff.jpeg" alt="" />}
      <button onClick={()=>{
setbulbon(true)
      }} > ON     </button>
        <button onClick={()=>{
            setbulbon(false)
        }}>Off</button>
    </>
  )
}

export default Bulbonoff
