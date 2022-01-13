import { useState } from 'react';
import './App.css';
import WaveList from './components/WaveList';
import useDetectWallet from './hooks/useDetectWallet';
import useWaves from './hooks/useWaves';

function App() {
  const { currentAccount, connectWallet, isLoading } = useDetectWallet();
  const [message, setMessage] = useState<string>('');
  const { wave } = useWaves();
  console.log(wave);

  return (
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>👋 Hey there!</div>

        <div className='bio'>Scooter here with typescript and web3</div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            wave(message);
          }}
          className='form'
        >
          <textarea
            required
            placeholder='Wave'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='text-area'
          />
          {currentAccount && (
            <button className='waveButton' type='submit'>
              Wave at Me
            </button>
          )}
        </form>
        {!currentAccount && !isLoading && (
          <button className='waveButton' onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        {/* <button className='waveButton' onClick={wave}>
          Wave at Me
        </button> */}
      </div>
      <div className='wavelist'>
        <WaveList />
      </div>
    </div>
  );
}

export default App;
