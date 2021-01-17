const { Visit } = require('../models');
const { validationResult } = require('express-validator');

function VisitController() {}

const create = async function(req, res) {

    const data = {
        visitor: req.body.visitor,
        dentNumber: req.body.dentNumber,
        diagnosis: req.body.diagnosis,
        price: req.body.price,
        date: req.body.date,
        time: req.body.time
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }

    await Visit.create(data, function (err, docs) {
        if(err){
            return res.status(500).json({
                success: false,
                message: err
            })
        }

        res.status(201).json({
            success: true,
            data: docs
        })
    })
};

const all = function (req, res) {
    Visit.find({}).populate('visitor').exec(function (err, docs) {
        if(err){
            return res.status(500).json({
                success: false,
                message: err
            })
        }

        res.json({
            success: true,
            data: docs
        })
    })
};

VisitController.prototype = {
    all,
    create
};

module.exports = VisitController;