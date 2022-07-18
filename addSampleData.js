const { getRethinkDBConnection } = require("./server")
const rethinkdb = require('rethinkdb');

async function insertScore(data) {
    const connection = await getRethinkDBConnection();
    rethinkdb.table('scores').insert(data).run(connection, (err, result)=> {
        if (err) throw Error(err)
        console.info(result)
    })
}

insertScore({ team1: 'manchester', team2: 'chelsea', score: [1, 2], timestamp: new Date() })

// rethinkdb.table('scores').filter({id: '78465f91-b412-4657-ab8e-2634a3758d7e'}).run()