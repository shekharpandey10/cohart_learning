import React, { useEffect, useState } from 'react'

function Page({ url }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
    const [scrollpercentage,setScrollPercentage]=useState(0)
    console.log(scrollpercentage)
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
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // )

   const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  if (error) {
    return <div>Error is: {error}</div>
  }

  if (loading) {
    return <div>Loading data...</div>
  }
  return (
    <div style={{width:'100%',height:'20px',backgroundColor:'pink'}}>
        <div style={{backgroundColor:'red',height:'10px',width:`${scrollpercentage}%`,position:'fixed', top:'0px',  transition: 'width 0.2s ease-out',
          zIndex: 1000,border:'1px solid black'}}>hello</div>
      <h2>Product list</h2>
      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>
      })}
    </div>
  )
}

export default Page
