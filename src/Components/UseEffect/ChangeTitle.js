import React, { useEffect, useState } from 'react'

function ChangeTitle() {
    const [count, setCount] = useState(0)

    useEffect(
        ()=>{
            document.title = `Changing ${count}`
        }
    )

    const clickHandler = ()=>{
        setCount(count + 1 )
    }
  return (
    <div>
        <button onClick={clickHandler}>Change title {count}</button>
    </div>
  )
}

export default ChangeTitle