const express = require('express');
const sequelize = require('./config/database')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const sendMessage = require('./public/js/utils')
require('dotenv').config()

const app = express();
const server = http.createServer(app)
const io = socketio(server)
const ADMIN = 'Admin'
const PORT =  process.env.PORT || 3000
io.on('connection', socket => {
    socket.emit('message', sendMessage(ADMIN, 'Welcome to the chatroom!'))

    socket.broadcast.emit('message', sendMessage('User', "A user has joined the channel"))

    socket.on('disconnect', () => {
        io.emit('message', sendMessage(ADMIN, 'A user has left the chat'))
    })

    socket.on('chat', (msg) => {
        io.emit('message', msg)
    })
})

app.set('views', 'public')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false, limit: '50mb'}))

const userRoutes = require('./routes/user.routes')
const chatRoutes = require('./routes/chat.routes')

app.use(userRoutes)
app.use(chatRoutes)

sequelize.sync()
    .then(_ => {
        server.listen(PORT, () => {
            console.log(`Application run on port ${PORT}`);
        })
    })
    .catch(e => {
        console.log(e)
    })

