const { Visit, Visitor } = require('../models');
const { validationResult } = require('express-validator');
const { delayedSMS } = require('../utils');
const dayjs = require('dayjs');
const { groupBy, reduce } = require('lodash');

function VisitController() {}

const create = async function(req, res) {
    let visitor;

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

    try {
        visitor = await Visitor.findOne({ _id:  data.visitor });
    } catch (e) {
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

        const delayedTime = dayjs(`${data.date.split('.').reverse().join('.')}T${data.time}`).subtract(1, 'minute').unix();

        delayedSMS({
            number: visitor.phone,
            text: `Привіт, за 2 години Вас очікують у стоматолога.`,
            time: delayedTime

        }).then(({ data }) => {
            console.log(data)
        }).catch(err => console.log(err));

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

        const group = groupBy(docs, 'date');

        res.json({
            success: true,
            data: reduce(group, (result, value, key) => {
                result = [...result, {title: key, data: value}];
                return result
            }, [])
        })
    })
};

const remove = async function(req, res) {
  const id = req.params.id;

  try {
      await Visit.findOne({ _id:  id });
  } catch (e) {
      return res.status(404).json({
          success: false,
          message: 'VISIT_NOT_FOUND'
      });
  }

    Visit.deleteOne({ _id: id }, (err) => {
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
    const visitId = req.params.id;

    const data = {
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

    try {
        await Visit.findOne({ _id:  visitId });
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'VISIT_NOT_FOUND'
        });
    }

    await Visit.updateOne({ _id:  visitId }, { $set: data }, function (err) {
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
    remove,
    update
};

module.exports = VisitController;