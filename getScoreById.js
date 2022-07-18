const { getRethinkDBConnection } = require("./server");
const r = require('rethinkdb');

async function getScoreById(id) {
    const connection = await getRethinkDBConnection();
    return new Promise((resolve, reject) => {
        r.table("scores").get("05b784bd-d356-4561-9aeb-adce5478edd9").run(connection, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

getScoreById('05b784bd-d356-4561-9aeb-adce5478edd9').then(console.log)