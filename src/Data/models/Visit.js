const mongoose  = require('mongoose');
const { Schema } = mongoose;

const VisitSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'Visitor' },
    dentNumber: Number,
    diagnosis: String,
    price: Number,
    date: String,
    time: String
}, {
    timestamps: true
});

const Visit = mongoose.model('Visit', VisitSchema);

module.exports = Visit;