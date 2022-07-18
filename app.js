const express = require('express');
const { getChanges } = require('./getScoreChanges');
const app = express();
const cors = require('cors');
const { getRethinkDBConnection } = require('./server');
const r = require('rethinkdb');
const http = require('http');
const { Server } = require("socket.io");
const { sendScoresToSocket } = require('./getScores');
const server = http.createServer(app);
const io = new Server(server);

app.get('/scoreboard', async (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('new user connected...');
    getChanges((err, cursor)=> {
        if(err) return
        cursor.each((err, data)=> {
            socket.emit('new_data', data)
        })
    })
});



// send the changes to all connected sockets

server.listen(3000)