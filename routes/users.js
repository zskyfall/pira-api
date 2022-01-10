var express = require('express');
const { postWithdrawRequest, getRequest, getAllRequests, postUpdateWithdrawRequest } = require('../controller/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/request/:id', getRequest);

router.get('/all-requests/:user_id', getAllRequests);

router.post('/withdraw', postWithdrawRequest);

router.post('/update-request', postUpdateWithdrawRequest);

module.exports = router;