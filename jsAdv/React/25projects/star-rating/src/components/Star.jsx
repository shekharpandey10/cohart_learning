import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Star.css'
function Star({ size = 5 }) {
  const [rating, setRating] = useState(0)
  const [ratingMove, setratingMove] = useState(0)

  function handleRating(index) {
    console.log(index,"index")
    setRating(index)
    // console.log(rating,"click")
  }
  function handleMouseMove(index) {
    setratingMove(index )
    console.log(index,"move")
  }

  function handleMouseLeave(){
    setRating(rating)
  }
  return (
    <div style={{width:'full', textAlign:'center'}}>
      {[...Array(size)].map((_, index) => {
        return (
          <FaStar
          className={index<(ratingMove || rating)?"active":"inactive"}
          key={index + 1}
            onClick={() => handleRating(index+1)}
            onMouseMove={() => handleMouseMove(index+1)}
            onMouseLeave={() => handleMouseLeave()}
            
           size={40}
          />
        )
      })}
    </div>
  )
}

export default Star
