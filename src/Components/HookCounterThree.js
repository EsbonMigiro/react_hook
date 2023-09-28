import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({fname: '', lname: ''})
  return (
    <form>
        <input type='text' value={name.fname} onChange={e=>setName({...name, fname: e.target.value})}/>
        <input type='text' value={name.lname} onChange={e=>setName({...name, lname: e.target.value})}/>
        <h1>{name.fname}</h1>
        <h1>{name.lname}</h1>
        <h1>{JSON.stringify(name)}</h1>
    </form>
  )
}

export default HookCounterThree