import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { WavePortal } from "../types/WavePortal";
import { contractABI, contractAddress } from '../utils/contractInfo';

interface Wave {
  address: string;
  timestamp: Date;
  message: string;
}

/** 
 * Method to get all waves from the contract
 */
const useWaves = () => {
  const [allWaves, setAllWaves] = useState<Wave[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const { ethereum } = window;

  useEffect(() => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        ) as WavePortal;

        // Call the getAllWaves method from contract, get address time and msg for UI
        wavePortalContract.getAllWaves().then((waves) => {
          setAllWaves(
            waves.map((wave) => ({
              address: wave.waver,
              timestamp: new Date(wave.timestamp.toNumber() * 1000),
              message: wave.message,
            }))
          );
          setIsLoading(false);
        });
        // wavePortalContract.getAllWaves().then((waves) => {
        //   waves.forEach((wave) => {
        //     setAllWaves([
        //       ...allWaves,
        //       {
        //         address: wave.waver,
        //         timestamp: new Date(wave.timestamp.toNumber() * 1000),
        //         message: wave.message,
        //       },
        //     ]);
        //   });
        //   setIsLoading(false);
        // });

      } else {
        console.log("Ethereum object does not exist");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [ethereum]);

  // wave function
  const wave = async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
    
        // call wave method from contract
        const waveTxn = await wavePortalContract.wave("Test wave");
        console.log('Mining... ', waveTxn.hash);
        await waveTxn.wait();
        console.log('Mined -- ', waveTxn.hash);
  
        count = await wavePortalContract.getTotalWaves(); // x
        console.log('Retrieved total wave count...', count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { waves: allWaves, wave, isLoading };
};

export default useWaves;
