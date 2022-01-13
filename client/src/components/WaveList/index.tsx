import useWaves from '../../hooks/useWaves';
import {
  Message,
  Table,
  Tdata,
  Timestamp,
  Trow,
  Waver,
} from './WaveListElements';

/**
 * WaveList Component returns a table containing the address, date / time and address of waver
 */
const WaveList: React.FC = (): React.ReactElement => {
  const { waves } = useWaves();

  return (
    <Table>
      <thead>
        <Trow>
          <Waver>Waver</Waver>
          <Message>Message</Message>
          <Timestamp>Timestamp</Timestamp>
        </Trow>
      </thead>
      <tbody>
        {waves &&
          waves.map((wave) => (
            <Trow key={`${wave.address}${wave.timestamp.toISOString()}`}>
              {/* <td className='cell-data'>{truncate(wave.address)}</td> */}
              <Tdata>{wave.address.slice(0, 5)}</Tdata>
              <Tdata>{wave.message}</Tdata>
              <Tdata>{wave.timestamp.toDateString()}</Tdata>
            </Trow>
          ))}
      </tbody>
    </Table>
  );
};

export default WaveList;

// const truncate = (str: string) => {
//   return `${str.substr(0, 5)}...${str.substr(str.length - 5, 5)}`;
// };
