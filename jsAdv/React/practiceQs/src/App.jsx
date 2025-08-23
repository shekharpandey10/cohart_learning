import { useState } from 'react'
import JokeApp from './components/JokeApp'
import './App.css'
import FocusInput from './components/FocusInput'
import ThemeSwitcher from './components/ThemeSwitcher' 
import WindowSizeApp from './components/WindowSizeTracker' 
import OnlineOflineNavigator from './components/OnlineOflineNavigator' 
function App() {
  const [count, setCount] = useState(0)

  return (
  // <JokeApp/>
  // <FocusInput/>
  // <ThemeSwitcher/>
  // <WindowSizeApp/>
  <OnlineOflineNavigator/>
  )
}

export default App
