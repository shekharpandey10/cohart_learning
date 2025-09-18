import React from 'react'

function Button({text,buttonOn,setGoNext}) {
  console.log('hello form button')

  return (
    <div className='text-center'>
      <button className={buttonOn?"text-center  color-white bg-[#3fdfcf] sm:w-[350px] w-[350px] h-12 rounded-md mt-7":"text-center w-full color-white bg-gray-400 sm:w-[350px]  w-[350px] h-12 rounded-md mt-7 " } disabled={!buttonOn} onClick={()=>{
        console.log('onclick triggred')
        setGoNext(true)
      }} >{text}</button>
    </div>
  )
}

export default Button

  