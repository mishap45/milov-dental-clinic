const { Visitor } = require('../models');
const { validationResult } = require('express-validator');

function VisitorController() {}

const create = async function(req, res) {

    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }

    await Visitor.create(data, function (err, docs) {
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
    Visitor.find({}, function (err, docs) {
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

VisitorController.prototype = {
    all,
    create
};

module.exports = VisitorController;