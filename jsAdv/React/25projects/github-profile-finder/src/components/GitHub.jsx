import React, { useEffect, useState } from 'react'
import Card from './Card'

function GitHub() {
  const [username, setusername] = useState('shekharpandey10')
  const[user,setUser]=useState('shekharpandey10')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  const handleClick = async (user) => {
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setData(data)
      }
      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    handleClick(username)
  }, [user])

{loading && <div>Loading Data...</div>}
{error && <div>Error found!...{error}</div>}
  return (
    <div style={{width:'100vw',height:'500px',display:'flex',alignItems:'center',flexDirection:'column',gap:'40px',paddingTop:'40px'}}>
      <div>
        <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} onKeyDown={(e)=>{
            if(e.key==='Enter'){
                setUser(username)
            }
        }} style={{width:'200px',height:'30px',border:'2px solid teal',outline:'none',borderRadius:'2px'}} />
        <button onClick={()=>setUser(username)} style={{height:'30px',backgroundColor:'teal',color:'white',borderRadius:'12px'}} >Search</button>
      </div>
      <Card data={data}/>
    </div>
  )
}

export default GitHub
