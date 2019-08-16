var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:@localhost:5432/opencourse')

function update(id, data) {

}

function create(data) {
    db.any("INSERT INTO course VALUES ($1, $2)", [data.name, data.description])
}

function read(id) {
    db.any("SELECT * FROM course WHERE id=$1", id)
    .then((data) => console.log(data))
}

function _delete(id) {

}

module.exports = {
    update: update,
    create: create,
    read: read,
    delete: _delete
}