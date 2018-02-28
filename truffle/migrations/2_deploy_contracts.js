var DumbContract = artifacts.require("./DumbContract.sol");
var HelloWorld = artifacts.require("./helloworld.sol")
var HealthContract = artifacts.require("./HealthContract.sol")
var CounterContract = artifacts.require("./CounterContract.sol")

module.exports = function(deployer) {
  deployer.deploy(DumbContract);
  deployer.deploy(HelloWorld);
  deployer.deploy(HealthContract);
  deployer.deploy(CounterContract);
};
