const db =  require('../Postgres/db');

async function update(id, data) {

}

async function create(data) {
    // TODO: add email
    let id;
    await db.one("INSERT INTO users(username, password, email) VALUES($1, crypt($2, gen_salt('md5')), $3) RETURNING id;", [data.username, data.password, data.email])
    .then(i => id = i)
    .catch((reason) => {
        console.log(reason.toString())
        console.error(reason)
    })
    return id
}

async function read(id) {
    // Todo: add bio and other user actions...
    let username;
    await db.one("SELECT username, email FROM users WHERE id=$1", id).then((u) => username = u)
    return username
}

async function get(username, password) {
    let id;
    await db.one("SELECT id FROM users WHERE username=$1 AND password=crypt($2, password);", [username, password])
    .then(prom => id = prom.id)
    .catch((error) => { console.log(error); return error })
    return id
}

function _delete(id) {
    return db.one("DELETE FROM users where id=$1", id)
}

module.exports = {
    update: update,
    create: create,
    read: read,
    get: get,
    delete: _delete
}