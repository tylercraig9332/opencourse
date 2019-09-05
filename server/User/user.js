const express = require('express')
const router = express.Router();

var model = require('./model')

router.get('/:id', (req, res) =>  {
    model.read(req.params.id).then(data => res.send(data))
})

router.post('/', (req, res) => {
    // TODO: pull data from request
    //let hardcodedata = {"username" : "A_Generic_User1", "password": "password"}
    console.log(req.body.username)
    //console.log(typeof(req.body.username))
    const user = {"username": req.body.username, "password": req.body.password, "email": req.body.email}
    model.create(user)
    .then(id => {
        session.user = id
        res.send(id)
    })
    //.catch(res.send("an error has occured"))
})

router.delete('/:id', (req, res) => {
    // Need to ensure that only the right user can execute this code.
    model.delete(req.params.id)
    res.send(200)
})

module.exports = router