import { useState } from 'react'
import Verify from './components/Verify'


function App() {
  const [count, setCount] = useState(0)
  console.log('hello from app')
  return (

     <div className='w-full h-screen  bg-[#002a5a]'>
    
    <Verify/>
 
 </div>
  )
}

export default App
