const db =  require('../Postgres/db');

async function update(id, data) {
    let u;
    await db.one("UPDATE lesson SET data=$1 WHERE id=$2 RETURNING data", [data, id])
    .then((data) => {
        u = data
    })
    return u;
}

async function create(dataa) {
    let id;
    await db.one("INSERT INTO lesson(courseID, type, data) VALUES ($1, $2, $3) RETURNING id", [dataa.courseID, dataa.type, dataa.data])
    .then((dataa) => {
        id = dataa
    })
    return id
}

async function read(id) {
    let lesson;
    await db.one("SELECT * FROM lesson WHERE id=$1", id)
    .then((data) => lesson = data)
    return lesson
}

async function list(limit) {
    let d = [];
    await db.any("SELECT * FROM lesson LIMIT $1", [limit])
    .then((data) => {
        d = data
    })
    .catch((reason) => {
        console.log(reason)
    })
    return d
}

function _delete(id) {
    return db.one("DELETE FROM lesson where id=$1", id)
}

module.exports = {
    update: update,
    create: create,
    read: read,
    list: list,
    delete: _delete
}