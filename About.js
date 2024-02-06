import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <>
      <h1>About page</h1>

      <ul>
    <li>
      <Link to="/Contact">Contact</Link>
  </li>
  <li>
      <Link to ="/About">About</Link>
    </li>
  </ul>
    </>
  )
}

export default About
