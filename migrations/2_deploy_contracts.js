var RONtoUSDOracle = artifacts.require("./RONtoUSDOracle.sol");

module.exports = function(deployer) {
  deployer.deploy(RONtoUSDOracle);
};
