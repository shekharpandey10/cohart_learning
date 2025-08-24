import React from 'react'
import Parent from './Parent'
import { useState } from 'react'

function Child({data={}}) {
    
    const [displayChildren,setDisplayChildren]=useState({})
    console.log(displayChildren)
    function handleToggle(currentLabel){
setDisplayChildren({...displayChildren,[currentLabel]:!displayChildren[currentLabel]})

    }
  return (
   <div>
     <li>
      {data.label}
      {data.children && data.children.length  ?<span onClick={()=>handleToggle(data.label)}>{displayChildren[data.label]?'-':'+'}</span>:null}
    </li>
      {data.children&& displayChildren[data.label]? <Parent menu={data.children}/>:null}
   </div>
  )
}

export default Child
