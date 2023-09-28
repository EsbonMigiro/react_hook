import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchData() {
    const [data, setData]  = useState([])
    
    useEffect(()=>{
    
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
           setData(res.data)
        })
        .catch(err=>{
           console.log(err) 
        })

    })
  return (
    <div>
        <ul>
            {
                data.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul>

    </div>
  )
}

export default FetchData