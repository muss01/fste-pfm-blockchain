const Exercise6 = artifacts.require("Exercise6");

module.exports = async function (deployer) {
    const initialValues = [1, 2, 3, 4, 5];
    await deployer.deploy(Exercise6, initialValues);
};
