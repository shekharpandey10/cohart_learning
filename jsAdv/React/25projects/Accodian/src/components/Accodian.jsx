import React, { useState } from 'react'
import dataItem from './data'
function Accodian() {
  const [click,setClick]=useState(null)
  const [multiselection,setMultiSelection]=useState(false)
  const [multiArr,setMultiArr]=useState([])

  function handlemultiArr(id){
    console.log('hiiii')
    const copyMulti=[...multiArr]

   const res= copyMulti.indexOf(id)
   console.log(res)
   if(res===-1){
    copyMulti.push(id)
        console.log(copyMulti)
   }else{
    copyMulti.splice(res,1)
    console.log(copyMulti)
   }
   setMultiArr(copyMulti)
  }

  function handleMultiselection(){
    setMultiSelection(!multiselection)
    console.log(multiselection)
  }
  return (

    <div style={{width:'100%', height:'100%',display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'20px'}}>
      <button onClick={handleMultiselection}>click for {!multiselection?"multiselection":"singleSelection"}</button>
      {dataItem.map((data)=>(
        <div onClick={()=>multiselection?handlemultiArr(data.id):setClick(data.id===click?null:data.id)} style={{ }} >
       <div style={{display:'flex'}}>
         <h3  style={{display:'inline'}}>{data.title}</h3>
        <span>+</span>
       </div>
        {multiselection 
        ? multiArr.indexOf(data.id)!==-1 && (<div>{data.content}</div>):data.id===click && (<div>{data.content}</div>)}
        </div>
        
      ))}
    </div>
  )
}

export default Accodian
