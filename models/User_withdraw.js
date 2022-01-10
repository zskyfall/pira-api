var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userWithdrawSchema = mongoose.Schema({
    user_id: String,
    amount: Number,
    timestamp: Number,
    status: String
});

var UserWithdraw = mongoose.model('UserWithdraw', userWithdrawSchema);
module.exports = UserWithdraw;