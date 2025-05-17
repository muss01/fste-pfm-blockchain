// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Exercise8 {
    address public recipient;

    constructor(address _recipient) {
        recipient = _recipient;
    }

    function receivePayment() public payable {
        require(msg.value > 0, "Le montant doit etre superieur a 0");
    }

    function withdraw() public {
        require(msg.sender == recipient, "Vous n'etes pas le destinataire");
        payable(recipient).transfer(address(this).balance);
    }
}
