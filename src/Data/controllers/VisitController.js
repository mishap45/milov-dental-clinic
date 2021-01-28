const { Visit, Visitor } = require('../models');
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

    const visitor = await Visitor.findOne({ _id:  data.visitor });

    if(!visitor) {
        return res.status(404).json({
            success: false,
            message: 'VISITOR_NOT_FOUND'
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

const remove = async function(req, res) {
  const id = req.params.id;

  const visit = await Visit.findOne({ _id:  id });

  if(!visit) {
      return res.status(404).json({
          success: false,
          message: 'VISIT_NOT_FOUND'
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

VisitController.prototype = {
    all,
    create,
    remove
};

module.exports = VisitController;