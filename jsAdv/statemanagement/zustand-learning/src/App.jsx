
import './App.css'
import Column from './components/Column'
import Test from './Test'

function App() {


  return (
  <div>
    <div className='App'>
<Column state="planning"/>
<Column state="ongoing"/>
<Column state="done"/>


  </div>
  <Test/>
  </div>
  )
}

export default App
