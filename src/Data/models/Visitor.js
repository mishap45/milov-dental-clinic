const mongoose  = require('mongoose');
const { Schema } = mongoose;

const VisitorSchema = new Schema({
    id: String,
    fullName: String,
    phone: String
}, {
    timestamps: true
});

VisitorSchema.virtual('visits', {
    ref: 'Visit',
    localField: '_id',
    foreignField: 'visitor',
    justOne: false
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;