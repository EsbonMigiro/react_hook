import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = `Changed ${count}`
    },[count])
  
}

export default useDocumentTitle