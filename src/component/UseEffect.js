import React,{useState,useEffect} from 'react'

function UseEffect() {
    const[value,setValue]=useState("initial data")
    const [value2,setValue2]=useState("initial data 2")
    useEffect(()=>{
        console.log("here we are using use effect without specific value")
    })
    
    useEffect(()=>{
        console.log(" for changing value of the value")
    },[value])
    function updateData(){
        setValue("value changed")
    }  
    function updateData2(){
        setValue2("initial data 2 after changes")
    }
  return (
    <div><br/><br/>UseEffect
        <br/><br/>
        {value} <br/>{value2}
        <br/><br/>
        <button onClick={updateData}>click here</button>
        <button onClick={updateData2}>not changing any thing</button>
        </div>
  )
}

export default UseEffect


