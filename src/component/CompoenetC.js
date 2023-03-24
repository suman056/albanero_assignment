import React from 'react'
import { UserConsumer } from './UseContext'

function CompoenetC() {
  return (
    <div><UserConsumer>
        {
            username=>{
                return <div>Hello{username}</div>
            }
        }
        </UserConsumer></div>
  )
}

export default CompoenetC