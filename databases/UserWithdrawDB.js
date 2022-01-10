//var mongoose = require('mongoose');
var UserWithdraw = require('../models/UserWithdraw');

module.exports = {
    //return single Request by Id
    getRequestById: (id, callback) => {
        var query = { _id: id };
        UserWithdraw.findOne(query, callback);
    },
    //return all requests of user
    getRequestsByUser: (userId, callback) => {
        var query = { user_id: userId };
        UserWithdraw.find(query, callback);
    },
    //add new withdraw request
    addNewRequest: (request, callback) => {
        var newRequest = new UserWithdraw(request);
        newRequest.save(callback);
    },
    //update withdraw request
    updateRequest: (id, updatedRequest, callback) => {
        var query = { _id: id };
        UserWithdraw.update(query, updatedRequest, callback);
    }

}