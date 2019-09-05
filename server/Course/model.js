const db =  require('../Postgres/db');

function update(id, data) {

}

async function create(data) {
    let id;
    await db.one("INSERT INTO course(name, description) VALUES ($1, $2) RETURNING id", [data.name, data.description])
    .then((data) => {
        id = data
    })
    return id
}

async function read(id) {
    let course;
    await db.one("SELECT * FROM course WHERE id=$1", id)
    .then((data) => course = data)
    return course
}

async function list(limit) {
    let d = [];
    await db.any("SELECT * FROM course LIMIT $1", [limit])
    .then((data) => {
        //console.log(data)
        //d.push(data)
        d = data
    })
    .catch((reason) => {
        console.log(reason)
    })
    //console.log("Post", d)
    //console.log(d)
    return d
}

function _delete(id) {
    return db.one("DELETE FROM course where id=$1", id)
}

module.exports = {
    update: update,
    create: create,
    read: read,
    list: list,
    delete: _delete
}