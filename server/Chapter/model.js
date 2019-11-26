const db =  require('../Postgres/db');

async function update(id, data) {
    let u = undefined;
    let {name, description} = data
    await db.one("UPDATE chapter SET name=$1, description=$2 WHERE id=$3 RETURNING id", [name, description, id])
    .then((data) => {
        u = data
    })
    return u;
}

async function create(data) {
    let id;
    await db.one("INSERT INTO chapter(courseId, name, description) VALUES ($1, $2, $3) RETURNING id", [data.courseId, data.name, data.description])
    .then((i) => {
        id = i
    })
    return id
}

async function read(id) {
    let chapter;
    await db.one("SELECT * FROM chapter WHERE id=$1", id)
    .then((data) => chapter = data)
    return chapter
}

async function list(id) {
    let chapters = undefined
    await db.any("SELECT * FROM chapter where courseID=$1 ORDER BY id", id)
    .then(data => chapters = data)
    return chapters
}

function _delete(id) {
    return db.one("DELETE FROM chapter where id=$1", id)
}

async function exists(id) {
    let e = false
    await db.one("SELECT COUNT(*) from chapter where id=$1", id).then((res) => {
        if (res.count === 1) {
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