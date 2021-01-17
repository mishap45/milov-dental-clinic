const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./db/db');
const validation = require('./utils/validation');
const { VisitorCtrl, VisitCtrl } = require('./controllers');

app.use(express.json());
app.use(cors());

app.get('/visitors', VisitorCtrl.all);
app.post('/visitors', validation.visitor.create, VisitorCtrl.create);

app.get('/visit', VisitCtrl.all);
app.post('/visit', validation.visit.create, VisitCtrl.create);

app.listen(6666, function (err) {
    if(err) {
        return console.log(err)
    }

    console.log('Server run')
});