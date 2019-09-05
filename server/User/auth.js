const express = require('express')
const router = express.Router();

var user = require('./model')

// auth login
//router.get('/login', (req, res) => {})

// auth logout
router.get('/logout', (req, res) => {
    req.logout()
    req.session = null
    res.redirect("/")
})

router.get('/google', (req, res) => {
    // handle with passport
    res.send("attept a login through google")
})

// used to log in user
router.post('/user', (req, res) => {
    //console.log(req.params)
    if (req.body == undefined || req.body == null) {
        res.sendStatus(404)
    }
    // TODO load user info and create cookie or something...
    user.get(req.body.username, req.body.password).then(id => {
        console.log("loggin in as user ", id)
        req.session.user = id;
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(400)
    })
})

router.get('/logged', (req, res) => {
    if (req.session == null) {
        res.send('notlogged')
    } else(
        res.send(req.session.user + '')
    ) 
})

module.exports = router