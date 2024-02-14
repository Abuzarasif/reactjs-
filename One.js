import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import '../App.css'
const One = (props) => {
  const navigate= useNavigate()
  const gothree=()=>{
    navigate("./Three.js")
  }
  return (
    <div>
      <h1 className='h1'>

        One  
      </h1>
      <ul>
        <li > <Link to="/Two"> Two     </Link>    </li>
        <li > <Link to="/Three">Three </Link>    </li>
      </ul>
<button onClick={gothree}>
  goto three 
</button>


<ul>
        <NavLink to="/One">  One </NavLink>
        <NavLink to="/Two">   Two </NavLink>
        <NavLink to="/Three"> Three</NavLink>
      </ul>
    </div>
  )
}

export default One
