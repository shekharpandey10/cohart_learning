import { useState,useEffect } from 'react'
import Star from './components/Star'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Star/>
      {/* <JokeApp/> */}
    </div>
  )
}



export default App
