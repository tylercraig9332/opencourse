const express = require('express')
const router = express.Router();

var model = require('./model')

router.get('/auth/:id', (req, res) => {
    // Evaluate if author's equal.
    model.read(req.params.id).then(course => {
        res.send(course.author == req.session.user) 
    })
})
.get('/all/:limit?', (req, res) => {
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
.get('/preview/:id', (req, res) => {
    model.read(req.params.id).then(data =>  res.send(data.preview))
})

router.post('/', (req, res) => {
    console.log("making a new course by user ", req.session.user)
    model.create({"name" : req.body.title, "description": req.body.description, "author": req.session.user})
    .then(id => res.send(id))
})

router.put('/', (req, res) => {
    if (!model.exists(req.body.id)) {
        model.create({"name" : req.body.title, "description": req.body.description, "author" : req.session.user})
        .then(id => res.send(id))
    }
    else {
        const data = [
            {
                "name" : req.body.name
            },
            {
                "description": req.body.description
            }
        ]
        updateIfAuth(req.body.id, data, req.session.user)
    }
})
.put('/preview/:id', (req, res) => {
    const data = [
        {
            "preview": req.body.preview
        }
    ]
    updateIfAuth(req.params.id, data, req.session.user)
})

router.delete('/:id', (req, res) => {
    model.delete(req.params.id).then(r => res.send(r))
})

function updateIfAuth(id, data, user) {
    model.read(id).then((course) => {
        if (course.author == user) {
            model.update(id, data)
        }
        else {
            console.log(`user ${user} attempted to update another course owned by ${course.author}`)
        }
    })
}

module.exports = router