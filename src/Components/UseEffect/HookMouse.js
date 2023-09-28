import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logOutMouse = (e)=>{
        console.log('mouse')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('Changing')
        window.addEventListener('mousemove', logOutMouse)

        return ()=>{
            console.log("Unmounted")
            window.removeEventListener('mousemove', logOutMouse)
        }
    }, [])

  return (
    <div>
        <h1>x: {x}</h1>
        <h1>y: {y}</h1>
    </div>
  )
}

export default HookMouse