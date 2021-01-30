const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const db = require('./db/db');
const validation = require('./utils/validation');
const { VisitorCtrl, VisitCtrl } = require('./controllers');

app.use(express.json());
app.use(cors());

app.get('/visitors', VisitorCtrl.all);
app.get('/visitors/:id', VisitorCtrl.show);
app.post('/visitors', validation.visitor.create, VisitorCtrl.create);
app.delete('/visitors/:id', VisitorCtrl.remove);
app.patch('/visitors/:id', validation.visitor.create, VisitorCtrl.update);

app.get('/visit', VisitCtrl.all);
app.post('/visit', validation.visit.create, VisitCtrl.create);
app.delete('/visit/:id', VisitCtrl.remove);
app.patch('/visit/:id', validation.visit.update, VisitCtrl.update);

app.listen(6666, function (err) {
    if(err) {
        return console.log(err)
    }

    console.log('Server run')
});