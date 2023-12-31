
import React, { useEffect, useRef, useState } from 'react'



function IntervalRef() {
    const [count, setCount] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
         intervalRef.current = setInterval(()=>setCount(prevCount=>prevCount+1), 1000)

        return ()=>{
            clearInterval(intervalRef.current)
        } 

    }, [])
  return (
    <div>
        Hook count {count}
        <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
    </div>
  )
}

export default IntervalRef