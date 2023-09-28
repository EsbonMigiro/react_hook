import React from 'react'
import ComponentB from './ComponentB'
import { CountContext} from '../../App'
import { useContext } from 'react'



function ComponentA() {
    const countContext = useContext(CountContext)
   
  return (
  
<   div>
        <ComponentB></ComponentB>
       
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>

     
  )
}

export default ComponentA