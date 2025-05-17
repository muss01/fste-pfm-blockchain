// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

abstract contract Forme {
    uint public x;
    uint public y;

    constructor(uint _x, uint _y) {
        x = _x;
        y = _y;
    }

    function deplacerForme(uint dx, uint dy) public {
        x += dx;
        y += dy;
    }

    function afficheXY() public view returns (uint, uint) {
        return (x, y);
    }

    function afficheInfos() public pure virtual returns (string memory) {
        return "Je suis une forme";
    }

    function surface() public view virtual returns (uint);
}

contract Exercise7 is Forme {
    uint public lo;
    uint public la;

    constructor(uint _x, uint _y, uint _lo, uint _la) Forme(_x, _y) {
        lo = _lo;
        la = _la;
    }

    function surface() public view override returns (uint) {
        return lo * la;
    }

    function afficheInfos() public pure override returns (string memory) {
        return "Je suis Rectangle";
    }

    function afficheLoLa() public view returns (uint, uint) {
        return (lo, la);
    }
}
