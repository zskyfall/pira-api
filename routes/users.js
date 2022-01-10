var express = require('express');
const { postWithdrawRequest } = require('../controller/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

router.post('/withdraw', postWithdrawRequest);

module.exports = router;