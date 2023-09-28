import React from 'react'
import { useReducer } from 'react'

const initialState = 0

const reducer = (state, action)=>{
    switch(action){
      case 'increment':
        return state +1
      case 'decrement':
        return state-1
       case 'reset':
        return initialState
    default:
        return state
    }
}



function ReducerThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
        {count}
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <hr></hr>
        {countTwo}
        <button onClick={()=>dispatchTwo('increment')}>IncrementTwo</button>
        <button onClick={()=>dispatchTwo('decrement')}>DecrementTwo</button>
    </div>
  )
}

export default ReducerThree