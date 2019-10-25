const express = require('express')
const router = express.Router();

var model = require('./model')

router.get('/:id', (req, res) =>  {
    // return chapter based on req.params.id
    model.read(req.params.id).then(data => res.send(data))
})

router.post('/', (req, res) => {
    model.create({"name" : req.body.title, "description": req.body.description})
    .then(id => res.send(id))
})

router.delete('/:id', (req, res) => {
    model.delete(req.params.id).then(r => res.send(r))
})

module.exports = router