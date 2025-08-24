import React, { useEffect, useState } from 'react'

function LoadScroller() {
  const [productData, setData] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      )
      const data = await response.json()
      console.log(data)
      if (data.products && data.products.length) {
        handleReload(data.products)
        setLoading(false)
      }
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [count])

  const handleReload = (result) => {
    setData((prevData) => [...prevData, ...result])
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div
        style={{
          display: 'grid',
          width: '98vw',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '5px',
        }}
      >
        {productData.map((d) => (
          <div
            key={d.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              border: '1px solid black',
            }}
          >
            <img src={d.thumbnail} alt='' />
            <span>{d.title}</span>
          </div>
        ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Reload new Product
          </button>
      </div>
    </div>
  )
}

export default LoadScroller
