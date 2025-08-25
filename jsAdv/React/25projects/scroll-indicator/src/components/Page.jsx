import React, { useEffect, useState } from 'react'

function Page({ url }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
    const [scrollpercentage,setScrollPercentage]=useState(0)
  async function callToapi() {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const record = await response.json()
        console.log(record.products)
        setData(record.products)
        setLoading(false)
      }
    } catch (e) {
      setError(e)
    }
  }
  useEffect(() => {
    // console.log('hello uncl')
    callToapi(url)
  }, [url])

  function handleScroll() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    )

    const howMuch=document.documentElement.scrollTop || document.documentElement.clientHeight

     const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuch / height) * 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  },[])

  if (error) {
    return <div>Error is: {error}</div>
  }

  if (loading) {
    return <div>Loading data...</div>
  }
  return (
    <div>
      <h2>Product list</h2>
      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>
      })}
    </div>
  )
}

export default Page
