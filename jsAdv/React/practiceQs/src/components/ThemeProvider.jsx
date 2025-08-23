import React, { createContext, useContext, useState } from 'react'

const TheemeContext = createContext()
function Parent(){
  const [theme,setTheme]=useState('light')
  return (
    <div>
        <TheemeContext.Provider value={{theme ,setTheme}} >
      <ThemeProvider/>
    </TheemeContext.Provider>
    </div>
  )


}
function ThemeProvider() {
   const {theme,setTheme}= useContext(TheemeContext)
   
   return(
    <div style={theme==='dark'?{backgroundColor:'gray',width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}:{backgroundColor:'white',width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <button onClick={()=>setTheme(theme=>(theme==='light'?'dark':'light'))}>Switch into {theme==='light'?"Dark":"Light"} Theme</button>
    </div>
   )
}

export default Parent
