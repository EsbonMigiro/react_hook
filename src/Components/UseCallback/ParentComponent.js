import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'




function ParentComponent() {

const [age, setAge] = useState(25)
const [salary, setSalary] = useState(50000)

const incrementAge = useCallback(()=>{
    setAge(age+1)
},[age])
const incrementSalary = useCallback(()=>{
    setSalary(salary+5000)
}, [salary])

  return (
    <div>
       
        <Title></Title>
        <Count text={'age'} value={age}></Count>
        <Button handleClick={incrementAge}>incrementAge</Button>
        <Count text={'salary'} value={salary}></Count>
        <Button handleClick={incrementSalary}>incrementSalary</Button>
        

    </div>
  )
}

export default ParentComponent