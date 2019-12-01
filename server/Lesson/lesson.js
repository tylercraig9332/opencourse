const express = require('express')
const router = express.Router();

var model = require('./model')

router.put('/:id', (req, res) => {
    if (req.params.id != -1 && model.exists(req.params.id)) {
        // Update
        console.log("updating lesson " + req.params.id)
        model.update(req.params.id, [{"name": req.body.name}, {"description": req.body.description}, {"type": req.body.type}, {"content": req.body.content}])
    } else {
        // Create
        console.log(`user ${req.session.user} is creating a new lesson`)
        model.create({"name": req.body.name, "description": req.body.description, "type": req.body.type, "content": req.body.content, "author": req.session.user})
        .then((id) => res.send(id))
    }
})
.put('/preview/:id', (req, res) => {
    model.update(req.params.id, [{"preview": req.body.preview}])
})

router.get('/all/:limit?', (req, res) => {
    // Return all models based on a limit, if undefined then we return 10
    let limit = 10
    if (!req.params.limit) {
        limit = req.params.limit
    }
    model.list(limit).then(r => res.send(r))
})
.get('/:type/:limit', (req, res) => {
    let limit = 10
    if (!req.params.limit) {
        limit = req.params.limit
    }
    model.list(limit, req.params.type)
})
.get('/:id', (req, res) =>  {
    // return lesson based on req.params.id:
    // TODO: add handling of loading a lesson that doesn't exist. return a -1 and render a "doesn't exist" page.
    console.log("loading lesson")
    model.read(req.params.id).then(data => res.send(data))
})
router.delete('/:id', (req, res) => {
    model.delete(req.params.id).then(r => res.send(r))
})

module.exports = router