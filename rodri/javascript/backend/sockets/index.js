const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('message', 'Welcome to the chat');
});

setInterval(() => {
    io.emit('message', 'Hello world');
}, 3000);

server.listen(8080, () => {
    console.log('Server listening at port 8080');
});