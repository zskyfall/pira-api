const Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

let postSignRequest = async function(req, res) {
    var { user_id, amount, nonce, timestamp } = req.body;

    let sig = await web3.eth.personal.sign(amount, user_id, nonce)
    return sig;
}

module.exports = {
    postSignRequest: postSignRequest
};