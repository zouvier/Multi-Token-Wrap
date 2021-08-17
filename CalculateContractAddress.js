//node version: v9.10.0
//module versions:
//rlp@2.0.0
//keccak@1.4.0

const rlp = require('rlp');
const keccak = require('keccak');

var nonce = 0xAD; //The nonce must be a hex
var sender = '0xc8eAD1336325A162d0aa2A8aaf9559BE5609e37C'; //Requires a hex string as input

var input_arr = [ sender, nonce ];
var rlp_encoded = rlp.encode(input_arr);

var contract_address_long = keccak('keccak256').update(rlp_encoded).digest('hex');

var contract_address = contract_address_long.substring(24); //Trim the first 24 characters, its all padding
console.log("contract_address: " + contract_address);