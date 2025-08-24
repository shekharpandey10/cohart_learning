import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'
function Slider() {
  const [image, setImage] = useState([])
  const [Indicator, setCurrentIndicator] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleLeft = () => {
    setCurrentIndicator(Indicator === 0 ? image.length - 1 : Indicator - 1)
  }
  const handleRight = () => {
    setCurrentIndicator(Indicator === image.length - 1 ? 0 : Indicator + 1)
  }
  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetch(
        'https://picsum.photos/v2/list?page=34&limits=10'
      )
      const data = await response.json()
      if (data) {
        setImage(data)
        setLoading(false)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) <div>Loading...</div>
  return (
    <div style={{ width: '500px', height: '500ox', position: 'relative' }}>
      <BsArrowLeftCircle
        onClick={handleLeft}
        style={{
          position: 'absolute',
          color: 'white',
          top: '50%',
          left: '10px',
        }}
      />
      {image.map((imageItem, index) => (
        <img
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          style={
            Indicator == index
              ? { width: '100%', height: '100%', objectFit: 'cover' }
              : { display: 'none' }
          }
        />
      ))}

      <BsArrowRightCircle
        onClick={handleRight}
        style={{
          position: 'absolute',
          color: 'white',
          top: '50%',
          left: '90%',
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: '8px',
          top: '80%',
          left: '50%',
        }}
      >
        {image.map((_, i) => (
          <button
            style={{
              backgroundColor: 'white',
              height: '20px',
              width: '20px',
              borderRadius: '50%',

              transform: 'translateX(-50%)',
            }}
            key={i}
            onClick={() => setCurrentIndicator(i)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slider
