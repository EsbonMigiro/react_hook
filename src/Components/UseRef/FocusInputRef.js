
// FocusInputRef.js
import React, { useEffect, useRef } from 'react'


function FocusInputRef() {
    const focusInput = useRef(null)

    useEffect(()=>{
       focusInput.current.focus()
    },[])


  return (
    <div>
      <input ref={focusInput} type='text' />
    </div>
  )
}

export default FocusInputRef