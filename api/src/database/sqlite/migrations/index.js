const sqlConnection = require("../index")

const createUsers = require('./createUsers')

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('')

    sqlConnection().then(db => db.exec(schemas))
    .catch(error => console.log(error))
}

module.exports = migrationsRun