
import React from 'react'
import useInput from "./useInput"


function Form() {
    

    const [firstName, bindFirstName, resetFirstName]=useInput('')
        const [secondName, bindSecondName, resetSecondName]=useInput('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${secondName}`)
        resetFirstName()
        resetSecondName()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>first name</label>
                <input type='text' {...bindFirstName}/>
            </div>
            <div>
                <label>Second name</label>
                <input type='text' {...bindSecondName}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form