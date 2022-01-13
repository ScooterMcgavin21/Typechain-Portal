// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    uint256 private seed;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;

    // associate address with a number, storing address with last time user waved
    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("I am a constructed smart contract, this is my life");
        seed = (block.timestamp * block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        //console.log("Last waved: %s", lastWavedAt[msg.sender]);
        // cooldown: current timestamp is atleast 2 mins or larger
        require(
            lastWavedAt[msg.sender] + 2 minutes < block.timestamp,
            "Cooldown: Wait 2 minutes"
        );

        // Update current timestamp for user
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        // generate new seed for next user
        seed = (block.timestamp * block.difficulty + seed) % 100;
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
