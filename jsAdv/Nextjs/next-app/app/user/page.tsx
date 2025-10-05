'use client'
import { error } from 'console'
import { useEffect, useState } from 'react'

interface user {
  name: String
  username: String
}

export default function user() {
  const [loading, setloading] = useState(true)
  const [data, setdata] = useState<user[]>()
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('hello')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        setdata(response)
        setloading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
        setloading(false)
      })
  }, [])

  if (loading) {
    return <div>loading....</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div>
      hello user
      <div>
        {data?.map((d,i) => (
          <div key={i}>
           {d.name}---{d.username}
          </div>
        ))}
      </div>
    </div>
  )
}
