import React, {  useState } from 'react'
import useDocumentTitle from '../../hook/useDocumentTitle'

function ChangeTitleCustomHook() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
  
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Change title {count}</button>
    </div>
  )
}

export default ChangeTitleCustomHook