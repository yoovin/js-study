const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const cors = require("cors")

const io = require('socket.io')(server,{
    cors : {
        origin :"*",
        credentials :true
    }
});

io.on('connection', (socket) => {
    console.log("user 연결 됨")
    socket.on("send-message", (data) => {
        console.log(data.user, data.msg)
        socket.broadcast.emit("send-message", {user: data.user, msg: data.msg})
    })
});

server.listen(3000, () => {
    console.log('listening on 3000');
});