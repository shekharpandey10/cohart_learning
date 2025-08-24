import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useThemeStorage from './hooks/useThemeStorage'
import { useEffect } from 'react'

function App() {
  const [theme,setTheme]=useThemeStorage('theme','dark')
  function handleTheme(){
    setTheme(prev=> prev==='light'?'dark':'light')
    // console.log(theme)
  }

  return (
   <div style={theme==='dark'?{width:'100%',height:'100vh',backgroundColor:'black',color:'white'}:{width:'100%',height:'100vh',backgroundColor:'white',color:'black'}}>
    <div>
      <p>Hello world !</p>
      <button onClick={handleTheme} style={theme==='dark'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}>Change Theme</button>
    </div>
   </div>
  )
}

export default App
