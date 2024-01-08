import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(10);
  let addValue=()=>{
    if(counter<21){
      setcounter(counter+1)
      console.log("Increment : ",counter);
    }
    else{
      console.log("Out of Range");
    }
  }
  let removeValue=()=>{
    if(counter>0){
      setcounter(counter-1);
      console.log("Decrement ",counter);
    }
    else
    console.log("-ve No. not allowed");
  }
  return (
    <>
     <h1>Counter with Chai</h1>
     <h2>value: {counter}</h2>
     <button
     onClick={addValue}
     >Increment +1</button> 
     <br />
     <button
     onClick={removeValue}
     >Decrement -1</button>
    </>
  )
}

export default App
