const Exercise1 = artifacts.require("Exercise1");

module.exports = async function (deployer) {
  await deployer.deploy(Exercise1);
};
