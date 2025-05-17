const Exercise8 = artifacts.require("Exercise8");

module.exports = async function (deployer, network, accounts) {
    const recipient = accounts[0];
    await deployer.deploy(Exercise8, recipient);
};
