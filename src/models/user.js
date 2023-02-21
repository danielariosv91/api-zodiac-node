const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter your name',
        trim: true
    },
    age: {
        type: Number,
        required: 'Please enter your name',
        trim: true
    },
    email: {
        type: String,
        required: 'Please enter your name',
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema);