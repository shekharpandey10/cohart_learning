import { useState } from 'react'
import './App.css'
const css=''
function App() {
  const [tic,setTic]=useState(Array(9).fill(''))
  return (
   <div className='bg-amber-400'>
    <div className='grid grid-cols-3 border '>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
   </div>
  )
}

export default App
