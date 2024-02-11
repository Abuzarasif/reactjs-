import React, { useState } from 'react'

const Propstate = (props) => {
    let [name,setname]=useState("abuzar")
const change=()=>{
setname("muhammad asif ")
}
    return (
    <div>
        <h1>mera name ha {name}</h1>
        <h1 >
            hellow my name is {props.meraname}
        </h1>
        <h1>my age is {props.mereage}</h1>
        <h1>I live in {props.merecity}</h1>
        <h1>I studies{props.meredegree} </h1>
        <h1> mere {props.merebio}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default Propstate
