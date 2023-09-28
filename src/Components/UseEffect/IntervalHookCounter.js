import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = ()=>{
        setCount(prevCount => prevCount+1)
    }

    useEffect(
        () =>{
        function doSomething(someProp){
            console.log('doSomething')
        }
        doSomething()
       const interval = setInterval(tick,1000)
         
        return ()=>{
            clearInterval()
        }
        }, [] )


  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter