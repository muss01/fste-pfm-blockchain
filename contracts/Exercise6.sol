// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Exercise6 {
    uint[] public nombres;

    constructor(uint[] memory initialNombres) {
        nombres = initialNombres;
    }

    function ajouterNombre(uint nombre) public {
        nombres.push(nombre);
    }

    function getElement(uint index) public view returns (uint) {
        require(index < nombres.length, "Index hors limites");
        return nombres[index];
    }

    function afficheTableau() public view returns (uint[] memory) {
        return nombres;
    }

    function calculerSomme() public view returns (uint somme) {
        for (uint i = 0; i < nombres.length; i++) {
            somme += nombres[i];
        }
    }
}
