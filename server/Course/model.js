var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:@localhost:5432/opencourse')

function update(id, data) {

}

function create(data) {
    db.any("INSERT INTO course(name, description) VALUES ($1, $2)", [data.name, data.description])
    .then((data) => console.log(data))
}

function read(id) {
    db.any("SELECT * FROM course WHERE id=$1", id)
    .then((data) => console.log(data))
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
    return db.any("DELETE FROM course where id=$1", id)
}

module.exports = {
    update: update,
    create: create,
    read: read,
    list: list,
    delete: _delete
}