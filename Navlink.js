import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import One from './One'
import Two from './Two'
import Three from './Three'
const Navlin = () => {
  return (
    <>
       <BrowserRouter>
   <Routes>
    <Route path='/One' element={<One/>}/>
    <Route path='/Two' element={<Two/>}/>
    <Route path='/Three' element={<Three/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default Navlin
