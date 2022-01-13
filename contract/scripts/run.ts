import hre from "hardhat";

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log("Contract deployed to", waveContract.address);

  // let waveCount;
  // waveCount = await waveContract.getTotalWaves();
  // console.log("Total number of waves: ", waveCount.toNumber());

  // Get Contract Balance
  let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  // Send Wave
  const waveTxn = await waveContract.wave("Wave 1");
  await waveTxn.wait();

  // const waveTxn2 = await waveContract.wave("Wave 2");
  // await waveTxn2.wait();

  // Get Contract Balance after the wave
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance after wave: ",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

(async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
})();
