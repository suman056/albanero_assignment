import React from 'react'
import { Fragment } from 'react'
function ElementVariableConditioningRendering(props) {
    let message
    if(props.condition)
      message=<div>this is for true condition</div>
      else
         message=<div>this is for false condition</div>
  return (
  <React.Fragment>
    {message}
   </React.Fragment>
  )
  // here in reactformat we don't have to put some extra div that will create some  problem when we are tryig to do any list 
}

export default ElementVariableConditioningRendering