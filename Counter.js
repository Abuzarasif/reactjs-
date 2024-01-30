import { useState } from "react";

// import Buton from './Components/Button'
function Count()
{
  const[count,setcount]=useState(0);
  function inc()
  {
    setcount(count+1)
  }
  function dec()
  {
    setcount(count-1)
  }
return(
  <>
  <h1>Counter</h1>
  <h3>{count}</h3>
  <button onClick={inc}>Increment </button>
  <button onClick={dec}>decrement</button>
  </>
)
}
export default Count;