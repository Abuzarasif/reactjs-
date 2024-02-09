import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import One from './One'
import Three from './Three'
import Two from './Two'

const Routerx=()=>{
    return(
        <>
        <h1>
            RouterX  
        </h1>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Routerx/>}/>

            <Route path='/One' element={<One/>}/>
            <Route path='/Two' element={<Two/>}/>
            <Route path='/Three' element={<Three/>}/>
                
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Routerx;