import React from 'react'
import { UserProvider } from './UseContext'

function NoteContext(props) {
    let studentinfo={
        name :"suman dhang",
        place:"haldia"
    }
  return (
    <UserProvider value={studentinfo}>
      {props.children}
    </UserProvider>
  )
}

export default NoteContext