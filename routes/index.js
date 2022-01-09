var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController");
const Web3 = require('web3');

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

/* GET home page. */
router.get('/', async function(req, res, next) {
    let rs = await web3.eth.accounts.create();
    console.log(rs);
    res.render('index', { title: 'Express' });
});

module.exports = router;