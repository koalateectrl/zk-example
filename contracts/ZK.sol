// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.11;

import "./InitVerifier.sol";

contract ZK is Verifier {
    uint256 public hash =
        uint256(
            15893827533473716138720882070731822975159228540693753428689375377280130954696
        );
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function isPreImage(
        uint256[2] memory a,
        uint256[2] memory b_0,
        uint256[2] memory b_1,
        uint256[2] memory c,
        uint256[1] memory inputs // public inputs
    ) public view returns (bool) {
        require(hash == inputs[0], "wrong hash");
        uint256[1] memory publicInputs = inputs;
        return verifyProof(a, [b_0, b_1], c, publicInputs);

        // require(verifyProof(a, [b_0, b_1], c, publicInputs), "invalid proof");
        // _mint();
        // return true;
    }

    function _mint() internal {}
}
