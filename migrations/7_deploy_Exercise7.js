const Exercise7 = artifacts.require("Exercise7");

module.exports = async function (deployer) {
    const x = 10;
    const y = 20;
    const lo = 5;
    const la = 8;

    await deployer.deploy(Exercise7, x, y, lo, la);
};
