// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Exercise3 {
    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function concatener(string memory a, string memory b) public pure returns (string memory) {
        return string(abi.encodePacked(a, b));
    }

    function concatenerAvec(string memory autre) public view returns (string memory) {
        return string(abi.encodePacked(message, autre));
    }

    function longueur(string memory s) public pure returns (uint) {
        return bytes(s).length;
    }

    function comparer(string memory a, string memory b) public pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }
}
