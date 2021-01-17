const { check } = require('express-validator');

const validation = {
    create: [
        check('visitor').isLength({ min: 3, max: 50 }),
        check('dentNumber').isInt({ min: 1, max: 48 }),
        check('diagnosis').isLength({ min: 3, max: 100 }),
        check('price').isInt({ min: 0, max: 200000 }),
        check('date').isLength({ min: 3, max: 50 }),
        check('time').isLength({ min: 3, max: 50 })
    ]
};

module.exports = validation;