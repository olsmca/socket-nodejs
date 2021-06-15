const express = require('express');
const colors = require("colors");
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('sockets'));
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`.green))

console.log("SocketIO");
const io = require('socket.io')(server);

io.on('connection', (socket) =>{
    console.log(`A user connected: ${socket.id}`)

    socket.on('user_data', (data)=>{
        console.log(`Mail: ${data.mail} User: ${data.user}`);
        //io.emit('new_user', {user: data.user})
    });
    socket.on('send_msg', (data)=>{
        console.log(`User: ${data.user} new msg `);
        io.emit('new_msg', {user: data.user, msg: data.msg})
    });
    
    /*socket.on('disconnect', ()=>{
        console.log('A user disconnected');
    });*/
});

