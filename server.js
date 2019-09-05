const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session')

const app = express();
const port = process.env.PORT || 8080;

const course = require('./server/Course/course')
const user = require('./server/User/user')
const auth = require('./server/User/auth')


app.use('/static', express.static(path.join(__dirname, 'public')));

const logger = (req, res, next) => {
    // Logs all requests that come through the server
    //console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(req.originalUrl)
    next()
}
app.use(logger);
app.use(session({
    secret: 'opencoursesessionsecret', // we can change this later and move it to its own file
    resave: true,
    saveUninitialized: true,
}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/getTest', (req, res) => {
    console.log('getTest was called yo!')
    const testList = ['DataItem1, DataItem2, DataItem3', 'These were loaded from the server']
    res.json(testList)
});

const allow = (req, res, next) => {
    if (req.session.user == undefined) {
        res.redirect('/login/')
        //console.log("user not defined")
    }
    else {
        console.log(req.session.user, 'user logged')
    }
    next()
}

app.use(allow)

app.use('/course', course)
app.use('/user', user)
app.use('/auth', auth)

app.listen(port, () => console.log(`listening on port ${port}`));