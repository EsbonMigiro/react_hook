import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}


const reducer = (state, action)=>{
     switch(action.type){
        case 'fetch_success':
            return {
              loading: false,
              error: '',
              post: action.value
            }
        case 'fetch_error':
            return {
                loading: false,
                error: 'something went wrong 2',
                post: {}
            }

            default:
                return state
     }
}


function DataFetchingUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
              .then(response=>{
                dispatch({type: 'fetch_success', value: response.data})
              })
              .catch(error=>{
                dispatch({type: 'fetch_error'})
              })
    },[])
  return (
    <div>
        {state.loading ? 'loading' : state.post.title }
        {state.error ? state.error: null}
    </div>
  )
}

export default DataFetchingUseReducer