const db =  require('../Postgres/db');

async function update(id, data) {
    let u = false;
    let {name, description} = data
    await db.one("UPDATE chapter SET name=$1 AND description=$2 WHERE id=$3", [name, description, id])
    .then((data) => {
        u = true
    })
    return u;
}

async function create(data) {
    let id;
    await db.one("INSERT INTO chapter(courseId, name, description) VALUES ($1, $2, $3) RETURNING id", [data.courseID, data.name, data.description])
    .then((id) => {
        id = id
    })
    return id
}

async function read(id) {
    let chapter;
    await db.one("SELECT * FROM chapter WHERE id=$1", id)
    .then((data) => chapter = data)
    return chapter
}

function _delete(id) {
    return db.one("DELETE FROM chapter where id=$1", id)
}

module.exports = {
    update: update,
    create: create,
    read: read,
    list: list,
    delete: _delete
}