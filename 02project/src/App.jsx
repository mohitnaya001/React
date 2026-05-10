import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(10)
  const addValue=()=>{
    if(Counter < 20){
      setCounter(Counter+1);
    }else{
      alert("Counter limit reached");
    }
  }
  const removeValue = () =>{
    if(Counter > 0){
      setCounter(Counter-1);
    }
    else{
      alert("You Can Not Count Negitive")
    }
  }

  return (
    <>
   <h1>Hello</h1>
   <h2>Counter Value: {Counter}</h2>  
   <button onClick={addValue}>Add Value</button>
   <br/>
   <button onClick={removeValue}>Remove Value</button>
  </>
  )
}

export default App
