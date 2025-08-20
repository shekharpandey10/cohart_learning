import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
    const [todo,setTodo]=useState([{
      title:"go to gym",
      description:"Hit the gym regularly",
      done:false
    }])
  
    function addTodo(){
      let todoArr=[]
      for(let i=0;i<todo.length;i++){
        todoArr.push(todo[i])
      }
     todoArr.push({
         title:document.getElementById('title').value,
      description:document.getElementById('desc').value,
      done:false
     })
     setTodo(todoArr)
    }
  return (
    <div>
      <input type="text" name="title" id="title" /><br/>
      <input type="text" name="desc" id="desc" /><br/>
      <button onClick={addTodo}>Add Todo</button>
      {todo.map(todo=><Todo 
      title={todo.title} description={todo.description} done={false}
      />)}
    </div>
  )
}


function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.done?"Task is done":"Task is not done"}</h3>
  </div>
}

export default App
