import React from 'react'
import CompB from './CompB'
import { useContext } from 'react'
import { UserContext, ChannelContext } from '../../App'


function CompA() {
const user = useContext(UserContext)
const channel = useContext(ChannelContext)
  return (
    <div>
        <CompB></CompB>
       <div>
       This is {user}  and {channel}
       </div>
    </div>
  )
}

export default CompA