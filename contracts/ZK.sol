// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.11;

import "./InitVerifier.sol";

contract ZK is Verifier {
    address public owner;

    // uint256 public output;

    constructor() public {
        owner = msg.sender;
        // output = 5489029987;
    }

    function isPreImage(
        uint256[2] memory a,
        uint256[2] memory b_0,
        uint256[2] memory b_1,
        uint256[2] memory c,
        uint256[1] memory input // public inputs
    ) public view returns (bool) {
        return verifyProof(a, [b_0, b_1], c, input);
    }
}

// contract ZK is Verifier {
//     address public owner;
//     int256[3] public weights;
//     int256[3] public votes;

//     constructor() {
//         owner = msg.sender;
//         weights = [25, 30, 15];
//         votes = [-1, 0, 1];
//     }

//     function isDotProduct(
//         uint256[2] memory a,
//         uint256[2][2] memory b,
//         uint256[2] memory c,
//         int256[7] memory input // public inputs
//     ) public view returns (bool) {
//         if (
//             input[0] != weights[0] &&
//             input[1] != weights[1] &&
//             input[2] != weights[2] &&
//             input[3] != votes[0] &&
//             input[4] != votes[1] &&
//             input[5] != votes[2] &&
//         ) {
//             revert("Supplied inputs do not match contracts");
//         }

//         return verifyProof(a, b, c, input[6]);
//     }
//}
