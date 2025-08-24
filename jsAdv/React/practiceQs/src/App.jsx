import { useState } from 'react'
import JokeApp from './components/JokeApp'
// import './App.css'
import FocusInput from './components/FocusInput'
import ThemeSwitcher from './components/ThemeSwitcher' 
import WindowSizeApp from './components/WindowSizeTracker' 
import OnlineOflineNavigator from './components/OnlineOflineNavigator' 
import Parent from './components/ThemeProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
   {/* // <JokeApp/>
  // <FocusInput/>
  // <WindowSizeApp/>
  // <OnlineOflineNavigator/>
  // <Parent/> */}
  <ThemeSwitcher/>
 </div>
  )
}

export default App
