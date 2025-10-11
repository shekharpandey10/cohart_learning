import { WebSocketServer, WebSocket } from 'ws'
const wss = new WebSocketServer({ port: 8001 })

let userCount = 0
let allSocket: WebSocket[] = []

const allUser: Record<string, WebSocket[]> = {}
wss.on('connection', (socket) => {
  allSocket.push(socket)
  userCount++

  socket.on('message', (message: string) => {
    const data = JSON.parse(message.toString())
    if (data.type === 'createRoom') {
      if (!(data.payload.roomId in allUser)) {
        allUser[data.payload.roomId] = [socket]
        console.log( 'room created')
      } else {
        console.log('room is present')
      }
    }

    if (data.type === 'join') {
      const roomId = data.payload.roomId
      if (data.payload.roomId in allUser) {
        const user = allUser[roomId]?.find((x) => x === socket)
        console.log('this is the user')
        if (user) {
          console.log('user is already present')
        } else {
          // console.log(allUser, 'sifjaljflka')
          allUser[roomId]?.push(socket)
          console.log('user added')
        }
      }else{
        console.log('room does not exists')
      }
    }

    if (data.type === 'message') {
      // console.log('jflkajfjakjfsjflkajlkfd')
      if (data.payload.roomId in allUser) {
        const room = allUser[data.payload.roomId]
        if (room?.length) {
          console.log(data.payload.message)
          for (let i = 0; i < room.length; i++) {
            room[i]?.send(data.payload.message)
          }
        }
      }
    }

    //  console.log(data)
  })

  socket.on('close', () => {
    console.log('disconnect the user ')
    allSocket = allSocket.filter((x) => x != socket)
  })
})
