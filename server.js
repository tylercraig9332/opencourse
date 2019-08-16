const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const course = require('./server/Course/course')


app.use('/static', express.static(path.join(__dirname, 'public')));

const logger = (req, res, next) => {
    // Logs all requests that come through the server
    //console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(req.originalUrl)
    next()
}
app.use(logger);

app.get('/api/getTest', (req, res) => {
    console.log('getTest was called yo!')
    const testList = ['DataItem1, DataItem2, DataItem3', 'These were loaded from the server']
    res.json(testList)
});

app.use('/course', course)

app.listen(port, () => console.log(`listening on port ${port}`));