import React from 'react'

function List({data,setInputValue}) {

console.log(data)
  return (
    <div>
        {
            data && data.length ? data.map((d,i)=><li key={i} onClick={()=>{
                setInputValue(d.firstName)
            }
            }
            >{d.firstName}</li>):null
        }
    </div>
  )
}

export default List
