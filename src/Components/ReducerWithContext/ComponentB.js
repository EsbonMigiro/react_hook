import React from 'react'
import ComponentC from './ComponentC'
import { CountContext} from '../../App'
import { useContext } from 'react'



function ComponentB() {
    const countContext = useContext(CountContext)
   
  return (
  
<   div>
        <ComponentC></ComponentC>
       
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>

     
  )
}

export default ComponentB