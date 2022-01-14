import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import WaveList from './components/WaveList';
import GlobalStyles from './GlobalStyles';
import useWaves from './hooks/useWaves';

function App() {
  const { wave } = useWaves();
  console.log(wave);

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Form />
      <WaveList />
    </>
  );
}

export default App;
