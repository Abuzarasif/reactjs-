import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Two = () => {
  return (
    <div>
            <h1>
        Two
      </h1>
      <ul>
        <li>  <Link to="/One"> One    </Link>     </li>
        <li>  <Link to="/Three">Three </Link>     </li>
      </ul>
      <ul>
        <NavLink to="/One">  One </NavLink>
        <NavLink to="/Two">   Two </NavLink>
        <NavLink to="/Three"> Three</NavLink>
      </ul>
    </div>
  )
}

export default Two
