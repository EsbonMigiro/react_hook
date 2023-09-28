import React from 'react'

function Title() {
    console.log('UseCallBack')
  return (
    <div>
       
     <h1>UseCallBack</h1>
    </div>
  )
}

export default  React.memo(Title)