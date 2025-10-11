import Image from 'next/image'

import axios from 'axios'
import { headers } from 'next/headers'
export default async function user() {
  console.log('hello user')
  console.log('hii')
  const response =  axios.post(
    'http://localhost:3000/api/v1/user',
    { username: 'shekhar', password: 'jfajfajf' },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  // console.log(response)
  // new Promise(r=>setTimeout(r,5000))
  const data = response.data

  return (
    <div>
      <div> User page</div>
      {/* {data.user} <br />
      {data.email} */}
    </div>
  )
}
