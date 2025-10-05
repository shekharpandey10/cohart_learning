
import { error } from 'console'
import { useEffect, useState } from 'react'

interface user {
  name: String
  username: String
}

export default async function user() {

  

  

  const res=await  fetch('https://jsonplaceholder.typicode.com/users')
 
    const data= await res.json()
console.log(data)


//   if (error) {
//     return <div>{error}</div>
//   }
  return (
    <div>
      hello user
      <div>
        {data?.map((d:{},i:number) => (
          <div key={i}>
           {d.name}---{d.username}
          </div>
        ))}
      </div>
    </div>
  )
}
