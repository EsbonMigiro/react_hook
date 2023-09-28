import React, { useEffect, useState } from 'react'

function CheckChangeTitle() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(
        ()=>{
            console.log('updating Title')
            document.title = `Changing ${count}`
        }, [count]
    )

    const clickHandler = ()=>{
        setCount(count + 1 )
    }
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={clickHandler}>Change title {count}</button>
    </div>
  )
}

export default CheckChangeTitle