import { useState } from 'react'
import SearchList from './components/SearchList'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div style={{width:'100%',textAlign:'center'}}>
    <SearchList url={'https://dummyjson.com/user'}/>
  </div>
  )
}

export default App
