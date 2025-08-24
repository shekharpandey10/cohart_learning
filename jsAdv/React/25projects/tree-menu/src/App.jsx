import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Parent from './components/Parent'
function App() {
console.log(data,'app')
  return (
  <div>
    <Parent menu={data}/> 
   
  </div>
  )
}

export default App
