const Exercise2 = artifacts.require("Exercise2");

module.exports = async function (deployer) {
    await deployer.deploy(Exercise2);
};
