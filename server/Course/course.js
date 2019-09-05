const express = require('express')
const router = express.Router();

var model = require('./model')

router.get('/all/:limit?', (req, res) => {
    // Return all models based on a limit, if undefined then we return 10
    let limit = 10
    if (!req.params.limit) {
        limit = req.params.limit
    }
    model.list(limit).then(r => res.send(r))
})
.get('/:id', (req, res) =>  {
    // return course based on req.params.id:
    // TODO: add handling of loading a course that doesn't exist. return a -1 and render a "doesn't exist" page.
    model.read(req.params.id).then(data => res.send(data))
})

router.post('/', (req, res) => {
    // TODO: pull data from request
    model.create({"name" : "A Post Test", "description": "test"})
    .then(id => res.send(id))
})

router.delete('/:id', (req, res) => {
    model.delete(req.params.id).then(r => res.send(r))
})

module.exports = router