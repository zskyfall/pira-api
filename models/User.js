var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone_number: String,
    gender: String,
    birthday: String,
    avatar: String,
    level: Number,
    balance: Number
});

var User = mongoose.model('User', userSchema);
module.exports = User;