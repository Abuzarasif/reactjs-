import React from 'react'

const Arr = () => {
  const arr=["Abuzar ","asif","awan","abubakar ","asif","awan","muhammad ","asif"]
    return (
    <>
    {
        arr.map((element,index)=>{
            return(
            <ul>
                <li>{element}</li>
            </ul>
            )

        })
    }
    </>
  )
}

export default Arr
