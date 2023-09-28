import React, { useMemo, useState } from 'react'

function Counter() {
    const [countOne, setCountOne] =useState(0)
    const [countTwo, setCountTwo] =useState(0)

    const incrementOne =()=>{
        setCountOne(countOne +1)
    }
   
    const incrementTwo =()=>{
        setCountTwo(countTwo +1)
    }

  
    const isEven =   useMemo(()=>{
        let i =0
        while(i<2000000000)

        return countOne % 2 === 0
     }, [countOne])

  return (
    <div>
       <div>
        <button onClick={incrementOne}>incrementOne {countOne}
       
        </button>
        <span>{isEven ? 'even' : 'odd'}</span>
       
       </div>
       <div>
        <button onClick={incrementTwo}>incrementTwo {countTwo}</button>
       </div>
    </div>
  )
}

export default Counter