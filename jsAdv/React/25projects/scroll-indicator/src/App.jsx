import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Page from './components/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Page url="https://dummyjson.com/products?limit=100"/>
    </div>
  )
}

export default App
