const Exercise3 = artifacts.require("Exercise3");

module.exports = async function (deployer) {
    await deployer.deploy(Exercise3);
};
