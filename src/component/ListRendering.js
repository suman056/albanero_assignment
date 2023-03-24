import React from 'react'

function ListRendering(props) {
    let list=props.value.map((value)=><div>I am {value.name} and I live in {value.place}</div>)
  return (
    <div>{list}</div>
  )

  
}

export default ListRendering