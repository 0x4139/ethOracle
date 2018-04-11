var fetch = require('fetch')
var OracleContract = require('./build/contracts/RONtoUSDOracle.json')
var contract = require('truffle-contract')

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var oracleContract = contract(OracleContract)
oracleContract.setProvider(web3.currentProvider)

if (typeof oracleContract.currentProvider.sendAsync !== "function") {
  oracleContract.currentProvider.sendAsync = function() {
    return oracleContract.currentProvider.send.apply(
      oracleContract.currentProvider, arguments
    );
  };
}

web3.eth.getAccounts((err, accounts) => {
  oracleContract.deployed()
  .then((oracleInstance) => {
    oracleInstance.CallbackGetRONtoUSD()
    .watch((err, event) => {
      fetch.fetchUrl('http://openexchangerates.appspot.com/currency?from=RON&to=USD&q=1', (err, m, b) => {
        console.log("---- data arived ----")
        console.log(b.toString())
        console.log("---- data arived ----")

        const data = JSON.parse(b.toString())
        const btcMarketCap = parseInt(parseFloat(data.rate)*100) //random number solidity does not have floats
        oracleInstance.setRONToUSDRate(btcMarketCap, {from: accounts[0]})
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })
})
