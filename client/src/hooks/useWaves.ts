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

  useEffect(() => {
    try {
      const { ethereum } = window;
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
          waves.forEach((wave) => {
            setAllWaves([
              ...allWaves,
              {
                address: wave.waver,
                timestamp: new Date(wave.timestamp.toNumber() * 1000),
                message: wave.message,
              },
            ]);
          });
          setIsLoading(false);
        });
      } else {
        console.log("Ethereum object does not exist");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { waves: allWaves, isLoading };
};

export default useWaves;
