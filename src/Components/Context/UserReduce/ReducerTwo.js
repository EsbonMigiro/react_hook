import React from 'react'
import { useReducer } from 'react'

const initialState = {
    firstName: 0,
    secondCounter: 10
}

const reducer = (state, action)=>{
    switch(action.type){
      case 'increment':
        return {...state, firstName: state.firstName + action.value}
      case 'decrement':
        return {...state,firstName: state.firstName -action.value}
      case 'increment2':
          return {...state,secondCounter: state.secondCounter + action.value}
      case 'decrement2':
          return {...state,secondCounter: state.secondCounter -action.value}
       case 'reset':
        return initialState
    default:
        return state
    }
}



function ReducerTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        {count.firstName}
        <hr></hr>
        {count.secondCounter}

        <hr></hr>

        <button onClick={()=>dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={()=>dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick={()=>dispatch({type: 'increment', value: 5})}>Increment 5</button>
        <button onClick={()=>dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        <hr></hr>
        <button onClick={()=>dispatch({type: 'increment2', value: 5})}>Increment 5-2</button>
        <button onClick={()=>dispatch({type: 'decrement2', value: 5})}>Decrement 5-2</button>

    </div>
  )
}

export default ReducerTwo