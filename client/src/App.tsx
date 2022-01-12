import { ethers } from 'ethers';
import React from 'react';
import './App.css';
import useDetectWallet from './hooks/useDetectWallet';
import abi from './utils/WavePortal.json';
const contractAddress = '0xD6f6dF28EC73Dd2EB53b371e2cf34141ac4950AC';
const contractABI = abi.abi;

function App() {
  const { currentAccount, connectWallet } = useDetectWallet();

  return (
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>👋 Hey there!</div>

        <div className='bio'>Scooter here with typescript and web3</div>

        <button className='waveButton' onClick={wave}>
          Wave at Me
        </button>
        {!currentAccount && (
          <button className='waveButton' onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
const wave = async () => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      let count = await wavePortalContract.getTotalWaves();
      console.log('Retrieved total wave count...', count.toNumber());

      // Execute contract wave method
      const waveTxn = await wavePortalContract.wave();
      console.log('Mining... ', waveTxn.hash);

      await waveTxn.wait();
      console.log('Mined -- ', waveTxn.hash);

      count = await wavePortalContract.getTotalWaves();
      console.log('Retrieved total wave count...', count.toNumber());
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
