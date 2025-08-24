import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useThemeStorage({key,defaultValue}) {
  const [theme,setTheme]=useState(()=>{
    let currentValue
    try{
        currentValue=JSON.parse(localStorage.getItem(key) || defaultValue)
      
    }catch(e){
        console.log(e)
        currentValue=defaultValue
    }
    return currentValue
  })

  useEffect(()=>{
   localStorage.setItem(key,JSON.stringify(theme))
  },[key,theme])

  return [theme,setTheme ]
}

export default useThemeStorage
