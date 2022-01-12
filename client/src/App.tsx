import React from 'react';
import './App.css';

function App() {
  const wave = () => {
    console.log('Waved');
  };
  return (
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>👋 Hey there!</div>

        <div className='bio'>Scooter here with typescript and web3</div>

        <button className='waveButton' onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}

export default App;
