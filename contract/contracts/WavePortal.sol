// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 private totalWaves;

    constructor() {
        console.log("I am a smart contract, this is my life");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %s total waves", totalWaves);
        return totalWaves;
    }
}
