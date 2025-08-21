import './Column.css'
import {useMemo} from 'react'
import {shallow} from 'zustand/shallow'
import React from 'react'
import Task from './Task'
import { useStore } from '../Store'
function Column({state}) {
    const task=useStore(store=>store.tasks
)
    console.log(task)
   useMemo(
    ()=>task.filter((task)=>task.state === state),
    [task,state]
   )
    
  return (
    <div className='column'>
    <p>{state}</p>
  {task.map((t)=> <Task title={t.title} key={t.title}/>)}
    </div>
  )
}

export default Column
