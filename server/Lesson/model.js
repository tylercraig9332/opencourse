const db =  require('../Postgres/db');

function update(id, data) {
    let sql = "UPDATE lesson SET "
    let vals = []
    for (let i = 0; i < data.length; i++) {
        const o = data[i]
        const key = Object.keys(o)[0]
        sql += key + `=$${i+1}`
        if (i < data.length - 1) {
            sql += ', '
        }
        vals.push(o[key])
    }
    sql += ' WHERE id=$' + (data.length + 1)
    console.log(sql)
    vals.push(id)
    db.one(sql, [...vals])
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

async function list(limit, type) {
    let q = "SELECT * FROM lesson LIMIT $1"
    console.log(type)
    if (type != null && type != undefined) {
        q = `SELECT * FROM lesson WHERE type='${type}' LIMIT $1`
    }

    let d = [];
    await db.any(q, [limit])
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