import { useState } from 'react'
import JokeApp from './components/JokeApp'
import './App.css'
import FocusInput from './components/FocusInput'
import ThemeSwitcher from './components/ThemeSwitcher'
function App() {
  const [count, setCount] = useState(0)

  return (
  // <JokeApp/>
  // <FocusInput/>
  <ThemeSwitcher/>
  )
}

export default App
