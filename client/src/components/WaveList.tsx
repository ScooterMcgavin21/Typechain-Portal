import useWaves from '../hooks/useWaves';
import '../styles/WaveList.css';

const WaveList: React.FC = (): React.ReactElement => {
  const { waves } = useWaves();

  return (
    <table className='table'>
      <thead>
        <tr className='column-head'>
          <th className='wave-pos'>Waver</th>
          <th className='msg-pos'>Message</th>
          <th className='date-pos'>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {waves &&
          waves.map((wave) => (
            <tr key={`${wave.address}${wave.timestamp.toISOString()}`}>
              <td className='cell-data'>{truncate(wave.address)}</td>
              {/* <td className='cell-data'>{wave.address.slice(0, 5)}</td> */}
              <td className='cell-data'>{wave.message}</td>
              <td className='cell-data'>{wave.timestamp.toDateString()}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default WaveList;

const truncate = (str: string) => {
  return `${str.substr(0, 5)}...${str.substr(str.length - 5, 5)}`;
};
