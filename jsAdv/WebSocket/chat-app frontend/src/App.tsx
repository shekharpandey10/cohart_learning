import { useEffect, useRef, useState } from 'react'

function App() {
  const [messages, setMessages] = useState<string[]>(['Hi there', 'how are you'])
  const [sendMsg, setSendMsg] = useState('')
  const wsRef = useRef<WebSocket | null>(null)
  const roomId = 'red' // Room ID to join

  // Connect to WebSocket
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8001')
    wsRef.current = ws

    ws.onopen = () => {
      // Create and join room
      ws.send(JSON.stringify({ type: 'createRoom', payload: { roomId } }))
      ws.send(JSON.stringify({ type: 'join', payload: { roomId } }))
    }

    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data])
    }

    ws.onclose = () => {
      console.log('WebSocket closed')
    }

    ws.onerror = (err) => {
      console.error('WebSocket error:', err)
    }

    // Cleanup on unmount
    return () => {
      ws.close()
    }
  }, [])

  // Send message
  const handleSend = () => {
    if (!sendMsg.trim() || !wsRef.current) return

    wsRef.current.send(
      JSON.stringify({
        type: 'message',
        payload: {
          roomId,
          message: sendMsg,
        },
      })
    )
    setSendMsg('')
  }

  return (
    <div className="h-screen bg-black flex flex-col justify-between p-5">
      {/* Messages container */}
      <div className="flex flex-col gap-2.5 pl-8 pr-8 overflow-y-auto flex-1">
        {messages.map((message, index) => (
          <span
            className="p-3 rounded-lg inline bg-white text-black w-fit"
            key={index}
          >
            {message}
          </span>
        ))}
      </div>

      {/* Input box */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter text"
          value={sendMsg}
          className="bg-white p-5 w-full rounded-lg outline-none"
          onChange={(e) => setSendMsg(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-700 text-white p-5 rounded-md cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App
