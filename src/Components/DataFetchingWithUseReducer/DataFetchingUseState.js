import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingUseState() {
     const[loading, setLoading] = useState(true)
     const [err, setErr] = useState('')
     const [post, SetPost] = useState({})

     useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
              .then(response=>{
               setLoading(false)
               SetPost(response.data)
               setErr('')
              })
              .catch(error=>{
                setLoading(false)
                SetPost({})
                setErr('somthing Went wrong')
              })

     }, [])


  return (
    <div>
      <h1>Data</h1>
     {loading ? 'loading' : post.title}
     {err ? err : null }
    </div>
  )
}

export default DataFetchingUseState