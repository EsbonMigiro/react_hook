import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchingIndividual() {
    const [data, setData]  = useState({})
    const [id, setId] = useState(1)
    const [valueIn, setValueIn] = useState(1)
   
    const handleClick = ()=>{
     setValueIn(id)
     
    }
    
    useEffect(()=>{
    
        axios.get(`https://jsonplaceholder.typicode.com/posts/${valueIn}`)
        .then(res=>{
           setData(res.data)
        })
        .catch(err=>{
           console.log(err) 
        })

    }, [valueIn])

  return (
    <div>
        <input type='text' value={id} onChange={ (e)=>setId(e.target.value)}/>
        <button onClick={handleClick}>Change Id</button>
        <hr></hr>
        {
            data.title
        }
    </div>
  )
}

export default FetchingIndividual