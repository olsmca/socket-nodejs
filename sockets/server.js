const express = require('express');
const colors = require("colors");
const app = express();
const port = 3000;

app.use(express.static('public'));
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`.green))

console.log("SocketIO");
const io = require('socket.io')(server);

io.on('connection', (socket) =>{
    console.log(`A user connected: ${socket.id}`)

    socket.on('disconnect', ()=>{
        console.log('A user disconnected');
    });
});

