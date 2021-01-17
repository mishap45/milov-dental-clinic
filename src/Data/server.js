const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require('./db/db');
const { VisitorCtrl } = require('./controllers');

app.use(bodyParser.json());
app.use(cors());

app.get('/visitors', VisitorCtrl.all);
app.post('/visitors', VisitorCtrl.create);

app.listen(6666, function (err) {
    if(err) {
        return console.log(err)
    }

    console.log('Server run')
});