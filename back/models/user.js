const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    age: Number,
    city: String,
    country: String,
    hasCar: Boolean
})

const User = mongoose.model('User', userSchema)

module.exports = User