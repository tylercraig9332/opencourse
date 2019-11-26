const express = require('express')
const router = express.Router();

var model = require('./model')

router.get('/:id', (req, res) =>  {
    // return chapter based on req.params.id
    model.read(req.params.id).then(data => res.send(data))
})
.get('/all/:id', (req, res) => {
    // Returns all chapters based on courseID
    model.list(req.params.id).then(data => res.send(data))
})

router.put('/', (req, res) => {
    //console.log(req.body.id)
    if (req.body.id === undefined || !model.exists(req.body.id)) {
        model.create({"courseId": req.body.courseId, "name" : req.body.name, "description": req.body.description})
        .then(id => res.send(id))
    } else {
        model.update(req.body.id, {"name" : req.body.name, "description": req.body.description})
        .then(id => res.send(id))
    }
})

router.delete('/:id', (req, res) => {
    model.delete(req.params.id).then(r => res.send(r))
})

module.exports = router