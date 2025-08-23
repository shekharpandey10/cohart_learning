import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
 const [typeOfColor,setTypeOfColor]=useState('HEX')
 const [colorHex,setColorHex]=useState('#0000')
 const [colorRgb,setColorRgb]=useState('rgb(0,0,0)')
console.log(typeOfColor==='HEX'?colorHex:colorRgb)

function hexutil(length){
    const sol=Math.floor(Math.random()*length)
    // console.log(sol)
    return sol
}

function generateHEX(length){
const HEX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
// console.log(HEX)
let color=''
  for(let i=0;i<length;i++){
    color += HEX[hexutil(HEX.length)]
  }
  setColorHex(`#${color}`)
}

function generateRGB(length){
const r=  Math.floor(Math.random()*length)
const g=  Math.floor(Math.random()*length)
const b=  Math.floor(Math.random()*length)
  setColorRgb(`RGB(${r},${g},${b})`)
}

function generateRandomColor(){
  console.log('genrate random')
  if(typeOfColor==='HEX'){
    generateHEX(6)
  }else{
    generateRGB(255)
  }
}


  return (
   <div style={{backgroundColor:typeOfColor==='HEX'?colorHex:colorRgb, width:'100vw', height:'100vh', display:'flex' ,justifyContent:'center',gap:'20px'}} >
    <div>
      <button onClick={()=>setTypeOfColor('HEX')}>Create HEX Color</button>
      <button onClick={()=>setTypeOfColor('RGB')}>Create RGB Color</button>
      <button onClick={generateRandomColor}>Generate Random</button>
    </div>
      <div  >
        <p style={{color:'white'}}>{typeOfColor==='HEX' ? colorHex:colorRgb}</p>
      </div>
   </div>
  )
}

export default App
