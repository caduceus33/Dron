var TokenDron = artifacts.require("./TokenDron");
var GestionDron = artifacts.require("./GestionDron");

module.exports = function(deployer) {

  deployer.deploy(TokenDron).then(function() {
    return deployer.deploy(GestionDron, TokenDron.address);
  });
};
