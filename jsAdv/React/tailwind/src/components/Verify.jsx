import React, { useEffect, useState } from 'react'
import { LuComputer } from 'react-icons/lu'
import Button from './Button'
function Verify() {
  console.log('hello from verify')
  const [buttonOn, setButtonOn] = useState(false)
  const [goNext, setGoNext] = useState(false)
  return (
    <div>
      <Logo />
      {!goNext ? (
        <Age
          setButtonOn={setButtonOn}
          buttonOn={buttonOn}
          text='Verify your age'
          para='Please confirm your birth year.This data not be stored.'
          buttonText='verify'
          inputType='date'
          setGoNext={setGoNext}
        />
      ) : (
        <Age
          setButtonOn={setButtonOn}
          buttonOn={buttonOn}
          text="Let's get started"
          buttonText='Continue'
          inputType='Email'
          placeholder='Email Id'
          setGoNext={setGoNext}
          goNext={goNext}
        />
      )}
    </div>
  )
}

function Logo() {
  console.log('hello from logo')
  return (
    <div className='w-full h-[250px] flex justify-center items-center'>
      <LuComputer className='text-white h-[60px] w-[100px]' />
      <div className='text-3xl text-white'>
        <span className='text-[#31b9b6] '>Webinar</span>.gg
      </div>
    </div>
  )
}

function Age({
  setButtonOn,
  buttonOn,
  text,
  para,
  buttonText,
  inputType,
  placeholder,
  setGoNext,
  goNext,
}) {
  console.log('age')
  return (
    <div className='w-full text-center '>
      <div className='text-4xl font-bold text-white text-center'>{text}</div>
      <div
        className={para ? 'text-sm font-normal mt-16 text-gray-400' : 'mt-5'}
      >
        {' '}
        {para}
      </div>
      <Input
        setButtonOn={setButtonOn}
        inputType={inputType}
        placeholder={placeholder}
        goNext={goNext}
      />
      <Button text={buttonText} buttonOn={buttonOn} setGoNext={setGoNext} />
    </div>
  )
}

function Input({ setButtonOn, inputType, placeholder, goNext }) {
  console.log('hello form input')
  const [valueI, setValue] = useState('')
  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholder}
        className='bg-[#183f6a] rounded-lg  mt-4 h-14 text-lg font-light w-[350px] text-center outline-none shadow-sm '
        value={valueI}
        onChange={(e) => {
          if (e.target.value != '') {
            setButtonOn(true)
            setValue(e.target.value)
          } else {
            setButtonOn(false)
          }
        }}
      />
    </div>
  )
}
export default Verify
