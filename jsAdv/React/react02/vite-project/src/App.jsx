import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [vis,setvisible]=useState(true)
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    let clock=setInterval(()=>{
       setvisible(vis=>!vis)
    },5000)
    
    return ()=>{
      console.log('on unmount')
      clearInterval(clock)
    }
  },[])
  return (
   <div>
    hello there
     {vis?<Counter counter={counter} setCounter={setCounter} />:null}
   </div>
  )
}


function Counter({counter,setCounter}){
  
    
  useEffect(()=>{
    const intervel=setInterval(()=>{
      setCounter(counter=>counter+1)
    },1000)
    return ()=>{
      clearInterval(intervel)
    }
  },[])

 
  return <div>
    <h1>
      {counter}
    </h1>
    <button onClick={()=>setCounter(counter+1)}>Increase count</button>
    <button onClick={()=>setCounter(counter-1)}>Decraese count</button>
    <button onClick={()=>setCounter(0)}>Reset count</button>
  </div>
}
export default App

