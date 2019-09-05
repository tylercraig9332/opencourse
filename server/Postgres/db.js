var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:@localhost:5432/opencourse')

module.exports = db