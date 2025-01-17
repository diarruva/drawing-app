// reuqired modules
const { Socket } = require('dgram')
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))
// lidhja me front endin ne folderin public Drawind-App 

io.on('connection',(socket)=>{
    console.log('a user connected')

    socket.on('draw',(data)=>{
        socket.broadcast.emit('draw',data)
    })

    socket.on('diconnect',()=>{
        console.log('user disconnected')
    })
    
    socket.on('clear',()=>{
        io.emit('clear canvas')
    })
})

const PORT = 3000
server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
//serveri qe eshte duke u bere runnig ne portin 3000