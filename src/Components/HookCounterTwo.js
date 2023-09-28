import React, { useState } from 'react'

function HookCounterTwo() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)
    const IncrementFive = ()=>{
        for(let i =0; i < 5; i++){
            setCount(preCount => preCount + 1)
        }
    }
    
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
        <button onClick={()=>setCount(preCount => preCount + 1)}>Increment</button>
        <button onClick={()=>setCount(preCount => preCount - 1)}>Decrement</button>
        <button onClick={IncrementFive }>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo