const r = require('rethinkdb');
const { getRethinkDBConnection } = require('./server');
async function getChanges(callbackFunction) {
    const connection = await getRethinkDBConnection()
    r.table('scores').changes({
        includeInitial: true,
    }).run(connection, callbackFunction)
}

module.exports = { getChanges }