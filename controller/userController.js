const Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

//Models
var UserWithdraw = require('../models/User_withdraw');

//Databases
var UserWithdrawDB = require('../databases/UserWithdrawDB');

const DEFAULT_REQUEST_STATUS = 'Pending';

let getRequest = async function(req, res) {
    var request_id = req.params.id;
    UserWithdrawDB.getRequestStatusById(request_id, (error, request) => {
        if (error) {
            console.log("ERROR while get single request: " + error);
            res.json({ success: false, error: error });
        } else {
            res.json({ success: true, request: request });
        }
    });
}

let getAllRequests = async function(req, res) {
    var user_id = req.params.user_id;
    UserWithdrawDB.getRequestsByUser(user_id, (error, requests) => {
        if (error) {
            console.log("ERROR while get all requests: " + error);
            res.json({ success: false, error: error });
        } else {
            res.json({ success: true, requests: requests });
        }
    });
}

let postWithdrawRequest = async function(req, res) {
    var { user_id, amount, timestamp } = req.body;
    var newWithdrawRequest = {
        user_id: user_id,
        amount: amount,
        timestamp: timestamp,
        status: DEFAULT_REQUEST_STATUS
    };

    UserWithdrawDB.addNewRequest(newWithdrawRequest, (error) => {
        if (error) {
            console.log("ERROR While add new request: " + error);
            res.json({ success: false, error: error });
        } else {
            res.json({ success: true });
        }
    });
}

let postUpdateWithdrawRequest = async function(req, res) {
    var { request_id, user_id, amount, timestamp, status } = req.body;
    var updatedRequest = {
        user_id: user_id,
        amount: amount,
        timestamp: timestamp,
        status: status
    };

    UserWithdrawDB.updateRequest(request_id, updatedRequest, (error) => {
        if (e) {
            console.log("ERROR While update request: " + error);
            res.json({ success: false, error: error });
        } else {
            res.json({ success: true });
        }
    });
}

module.exports = {
    getRequest: getRequest,
    getAllRequests: getAllRequests,
    postWithdrawRequest: postWithdrawRequest,
    postUpdateWithdrawRequest: postUpdateWithdrawRequest
};