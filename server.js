const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));

const logger = (req, res, next) => {
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


app.listen(port, () => console.log(`listening on port ${port}`));