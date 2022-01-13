import './App.css';
import WaveList from './components/WaveList';
import useDetectWallet from './hooks/useDetectWallet';
import useWaves from './hooks/useWaves';

function App() {
  const { currentAccount, connectWallet, isLoading } = useDetectWallet();
  const { wave } = useWaves();
  console.log(wave);

  return (
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>👋 Hey there!</div>

        <div className='bio'>Scooter here with typescript and web3</div>

        <button className='waveButton' onClick={wave}>
          Wave at Me
        </button>
        {!currentAccount && !isLoading && (
          <button className='waveButton' onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
      <div className='wavelist'>
        <WaveList />
      </div>
    </div>
  );
}

export default App;
