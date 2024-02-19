// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Apiinte = () => {
//     const [user,setuser]=useState([]);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
//             console.log(res)
//             setuser(res.data);
//         }).catch((err) => {
//             console.log(err)
//         })
//     })
// return (
//     <>
//     <center>
//     <h1>
//         API Integration 
//     </h1>
//     </center>

//     {
//         user.map((element,index)=>{
//             <h1 key={index}>{element.username}</h1>
//         })
//     }


//     </>
//   )
// }

// export default Apiinte


import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apiinte = () => {
    const [name, setName] = useState([])
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data)
            setName(res.data)
            
        }).catch((err)=>{
            console.log(err);
        })
    })
  return (
    <>
      <h1>hellow</h1>
      {name.map((element,index)=> {return(
<h1 key={index}>
 {element.name}
 {element.id}
</h1>
      )})
      }
    </>

)

}

export default Apiinte



// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Apiinte = () => {
//     const [name, setName] = useState([])

//     useEffect(() =>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//             .then((res)=>{
//                 console.log(res.data)
//                 setName(res.data)
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//     }, []) // Empty dependency array to ensure useEffect runs only once

//     return (
//         <>
//             <h1>hello</h1>
//             {name.map((element, index) => (
//                 <h1 key={index}>
//                     {element.name}
//                 </h1>
//             ))}
//         </>
//     )
// }

// export default Apiinte

