const express = require('express')
const router = express.Router();

var course = require('./model')

router.get('/all', (req, res) => {
    // Return all courses
    /*module.list(10, req.query.pageToken, (err, entities, cursor) => {
        if (err) {
            next(err);
            return;
        }
    })
    console.log(entities)*/
    //res.json()
})
.get('/new', (req, res) => {
    course.create({"name": "The First Course", "description": "test"})
})
.get('/:id', (req, res) =>  {
    // return course based on req.params.id:
    console.log(req.params.id)
    course.read(req.params.id)
})

router.post('/', (req, res) => {
    // TODO:
    course.create({"description": "test", "tags": ['hello', 'goodbye']})
    console.log("Posted")
})

router.delete('/:id', (req, res) => {
    // TODO:
})

module.exports = router