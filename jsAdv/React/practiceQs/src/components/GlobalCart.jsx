import React, { createContext, useContext, useState } from 'react'
const CartContext=createContext()

const Items=[
    {id:1,
    title:'John aia'
    }
]
function GlobalCart() {

    const [items,setItems]=useState([])
  return (
    <div>
      
    </div>
  )
}

export default GlobalCart
