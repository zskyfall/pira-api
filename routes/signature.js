var express = require('express');
const signatureController = require('../controller/signatureController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/sign-request', signatureController.postSignRequest);

module.exports = router;