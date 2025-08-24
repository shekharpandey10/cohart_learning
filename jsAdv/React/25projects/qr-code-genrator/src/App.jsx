import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import QRCode from 'react-qr-code'
// import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [qrcode, setQrcode] = useState('')

  const handleQrGenrator = () => {
    setQrcode(input)
    setInput('')
  }
  return (
    <div style={{width:'100vw',display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>
      <div
        style={{
          
          flexDirection: 'column',
          width: '300px',
        }}
      >
        <h1>Qr Code Genrator</h1>
        <div>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e)=>{
           if( e.key.toLowerCase()==='enter'){
            handleQrGenrator()
           }
          }}
          />
          <button onClick={handleQrGenrator}>submit</button>
        </div>
        <QRCode
          value={qrcode}
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  )
}

export default App
