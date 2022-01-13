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
        wavePortalContract
          .getAllWaves()
          .then((waves) => {
            setAllWaves(
              waves.map((wave) => ({
                address: wave.waver,
                timestamp: new Date(wave.timestamp.toNumber() * 1000),
                message: wave.message,
              }))
            );
            setIsLoading(false);
          })
          .catch((error) => console.log("Error fetching waves", error));
        // wavePortalContract.getAllWaves().then((waves) => {
        //   setAllWaves(
        //     waves.map((wave) => ({
        //       address: wave.waver,
        //       timestamp: new Date(wave.timestamp.toNumber() * 1000),
        //       message: wave.message,
        //     }))
        //   );
        //   setIsLoading(false);
        // });
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
  const wave = async (message: string) => {
    console.log('wave called')
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
        const waveTxn = await wavePortalContract.wave(message, {
          gasLimit: 300000,
        });
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

  /**
   * Listener events
   */
  useEffect(() => {
    let wavePortalContract: ethers.Contract;

    const onNewWave = (from: any, timestamp: any, message: string) => {
      console.log("NewWave", from, timestamp, message);
      setAllWaves((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ]);
    };

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);
    }

    // cleanup
    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, [ethereum]);

  return { waves: allWaves, wave, isLoading };
};

export default useWaves;
