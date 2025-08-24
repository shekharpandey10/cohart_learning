import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Slider from './components/Slider'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Slider/>
    </div>
  )
}

export default App
