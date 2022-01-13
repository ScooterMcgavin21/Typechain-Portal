// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 private totalWaves;
    uint256 private seed;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] private waves;

    // associate address with a number, storing address with last time user waved
    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("I am a constructed smart contract, this is my life");
        seed = (block.timestamp * block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        console.log("Last waved: %s", lastWavedAt[msg.sender]);
        // cooldown
        require(
            lastWavedAt[msg.sender] + 15 seconds < block.timestamp,
            "Cooldown: Wait 15 seconds"
        );

        // Update lastwaved for user
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        seed = (block.timestamp * block.difficulty + seed) % 100; // generate new seed
        console.log("Random # generated %s", seed);

        if (seed <= 50) {
            console.log("%s won!", msg.sender);

            uint256 prizeAmount = 0.0001 ether;

            require(
                prizeAmount <= address(this).balance,
                "Contract has less than the withdraw amount."
            );

            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Yo this contract cant even pay you out!");
        }

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %s total waves", totalWaves);
        return totalWaves;
    }
}
