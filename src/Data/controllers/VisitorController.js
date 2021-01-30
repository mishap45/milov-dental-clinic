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

const remove = async function(req, res) {
    const id = req.params.id;

    try {
        await Visitor.findOne({ _id:  id });
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'VISITOR_NOT_FOUND'
        });
    }

    Visitor.deleteOne({ _id: id }, (err) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: err
            })
        }

        res.json({
            success: true
        })
    })
};

const update = async function(req, res) {
    const visitorId = req.params.id;

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

    try {
        await Visitor.findOne({ _id:  visitorId });
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'VISITOR_NOT_FOUND'
        });
    }

    await Visitor.updateOne({ _id:  visitorId }, { $set: data }, function (err) {
        if(err){
            return res.status(500).json({
                success: false,
                message: err
            })
        }

        res.json({
            success: true
        })
    })
};

const show = async function(req, res) {
    const id = req.params.id;

    try {
        const visitor = await Visitor.findById(id).populate('visits').exec();
        res.json({
            success: true,
            data: { ...visitor._doc, visits: visitor.visits }
        })
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'VISITOR_NOT_FOUND'
        });
    }
};

VisitorController.prototype = {
    all,
    create,
    remove,
    update,
    show
};

module.exports = VisitorController;