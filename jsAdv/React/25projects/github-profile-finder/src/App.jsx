import { useState } from 'react'

import GitHub from './components/GitHub'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:'100vw'}}>
      <GitHub/>
     
    </div>
  )
}

export default App
