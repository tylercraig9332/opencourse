const db =  require('../Postgres/db');

function update(id, data) {
    console.log(data)
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
    let q = "SELECT * FROM lesson WHERE id=" + id
    console.log(q)
    let lesson;
    await db.one(q)
    .then((data) => lesson = data)
    return lesson
}

async function list(limit, type, user, courseID, chapterID) {
    let q = "SELECT * FROM lesson LIMIT $1"
    if (type != null && type != undefined) {
        if (type === 'yours' && user != undefined) {
            q = `SELECT * FROM lesson WHERE author=${user} LIMIT $1`
        }
        else {
            q = `SELECT * FROM lesson WHERE type='${type}' LIMIT $1`
        }
    } else if (courseID != undefined && chapterID != undefined) {
        q = `SELECT * FROM lesson WHERE courseID=${courseID} AND chapterID=${chapterID}`
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