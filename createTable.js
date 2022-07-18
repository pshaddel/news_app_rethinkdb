const { getRethinkDBConnection } = require("./server");
const rethinkdb = require('rethinkdb');

async function createTable() {
   const connection = await getRethinkDBConnection();
   rethinkdb.db('test').tableCreate('scores').run(connection, function(err, result) {
       if (err) throw err;
       console.log(JSON.stringify(result, null, 2));
   })
}

createTable()
