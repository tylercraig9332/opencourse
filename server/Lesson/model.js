const db =  require('../Postgres/db');

async function update(id, data) {
    let u;
    await db.one("UPDATE lesson SET name=$1, description=$2, type=$3, content=$4 WHERE id=$5 RETURNING id", [data.name, data.description, data.type, data.content, id])
    .then((data) => {
        u = data
    })
    return u;
}

async function create(data) {
    let id;
    await db.one("INSERT INTO lesson(name, description, type, content, author) VALUES ($1, $2, $3, $4, $5) RETURNING id", [data.name, data.description, data.type, data.content, data.author])
    .then((data) => {
        id = data
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

async function exists(id) {
    let e = false
    await db.one("SELECT COUNT(*) from lesson where id=$1", id).then((c) => {
        if (c === 1) {
            e = true
        }
    })
    return e
}

module.exports = {
    update: update,
    create: create,
    read: read,
    list: list,
    delete: _delete,
    exists: exists
}