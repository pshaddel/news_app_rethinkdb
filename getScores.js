const { getRethinkDBConnection } = require("./server");
const r = require('rethinkdb')

async function sendScoresToSocket(socket) {
    const connection = await getRethinkDBConnection();
    console.log('send scores')

    r.table('scores').run(connection, (err, cursor) => {
        cursor.each((err, row)=> {
            socket.broadcast.emit('init', row)})
    })
}

module.exports = { sendScoresToSocket }