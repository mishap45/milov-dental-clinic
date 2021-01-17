const mongoose  = require('mongoose');
const { Schema } = mongoose;

const VisitorSchema = new Schema({
    id: String,
    fullName: String,
    phone: String
}, {
    timestamps: true
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;