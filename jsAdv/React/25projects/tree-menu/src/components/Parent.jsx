import React from 'react'
import Child from './Child'

function Parent({menu=[]}) {
    // console.log(menu,"parent")
  return (
    <ul>
      {
        menu && menu.length ?menu.map((data,i)=><Child data={data}/>):null
      }
    </ul>
  )
}

export default Parent
