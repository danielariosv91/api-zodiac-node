const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signsSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter your name',
        trim: true
    },
    element: {
        type: String,
    },
    modality: {
        type: String,
    },
    number: {
        type: Number,
    },
    regent: {
        type: String,
    },
    metal: {
        type: String,
    },
    mythology: {
        type: String,
    },
    description: {
        type: String,
    },
})

module.exports = mongoose.model('Signs', signsSchema);