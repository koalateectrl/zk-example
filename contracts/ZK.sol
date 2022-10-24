// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.11;

import "./InitVerifier.sol";

contract ZK is Verifier {
    event Minted(string message, address minter);

    uint256 public hash =
        uint256(
            15893827533473716138720882070731822975159228540693753428689375377280130954696
        );
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function mint(
        uint256[2] memory a,
        uint256[2] memory b_0,
        uint256[2] memory b_1,
        uint256[2] memory c,
        uint256[1] memory inputs // public inputs
    ) public returns (bool) {
        // Without line below, security vuln
        // require(hash == inputs[0], "wrong hash");
        uint256[1] memory publicInputs = inputs;
        require(verifyProof(a, [b_0, b_1], c, publicInputs), "invalid proof");
        _mint();
        emit Minted("Mint successful", msg.sender);
        return true;
    }

    function _mint() internal {}
}
