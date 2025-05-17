const Exercise4 = artifacts.require("Exercise4");

module.exports = async function (deployer) {
    await deployer.deploy(Exercise4);
};
