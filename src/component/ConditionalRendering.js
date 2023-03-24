import React from 'react'

function ConditionalRendering(props) {
  //if else contioning rendering
    if(props.person)
   return  <div>This is person</div>
  else 
   return  <div>This is not person</div>
  //


}

export default ConditionalRendering

 