import {WebSocketServer,WebSocket} from 'ws'
const wss=new WebSocketServer({port:8001})
let userCount=0
let allSocket:WebSocket[]=[]
wss.on('connection',(socket)=>{
    allSocket.push(socket)
    userCount++ 
    console.log('user connnected #',userCount)

    socket.on('message',(event)=>{
        console.log('message recived ', event.toString()+ ' from user: ',userCount)
      allSocket.forEach((soc,i)=>{
        soc.send(`message from the user ${i+1} is : ${event.toString()}`)
      })
       
    })
})

