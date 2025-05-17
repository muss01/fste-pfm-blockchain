const Exercise5 = artifacts.require("Exercise5");

module.exports = async function (deployer) {
    await deployer.deploy(Exercise5);
};
