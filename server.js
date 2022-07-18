const rethinkdb = require('rethinkdb');

let connection = null;

function getRethinkDBConnection() {
    return new Promise((resolve, reject) => {
        if (connection) resolve(connection);
        rethinkdb.connect( {host: 'localhost', port: 28015}, function(err, conn) {
            if (err) reject(err);
            connection = conn;
            resolve(conn);
        })
    })
}

module.exports = { getRethinkDBConnection }

// r.db('test').tableCreate('scores').run(connection, function(err, result) {
//     if (err) throw err;
//     console.log(JSON.stringify(result, null, 2));
// })

// r.table('scores').changes().run(connection, function(err, cursor) {
//     if (err) throw err;
//     cursor.each(function(err, row) {
//         if (err) throw err;
//         console.log(JSON.stringify(row, null, 2));
//     });
// });
