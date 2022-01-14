import useWaves from '../../hooks/useWaves';
import {
  Message,
  Table,
  Tdata,
  Timestamp,
  Trow,
  Waver,
  Wrapper,
} from './WaveListElements';

/**
 * WaveList Component returns a table containing the address, date / time and address of waver
 */
const WaveList: React.FC = (): React.ReactElement => {
  const { waves } = useWaves();

  return (
    <Wrapper>
      <Table>
        <thead>
          <Trow>
            <Timestamp>Timestamp</Timestamp>
            <Message>Message</Message>

            <Waver>Waver</Waver>
          </Trow>
        </thead>
        <tbody>
          {waves &&
            waves.map((wave) => (
              <Trow key={`${wave.address}${wave.timestamp.toISOString()}`}>
                {/* <td className='cell-data'>{truncate(wave.address)}</td> */}
                <Tdata>{wave.timestamp.toDateString()}</Tdata>

                <Tdata>{wave.message}</Tdata>
                <Tdata>{wave.address.slice(0, 5)}</Tdata>
              </Trow>
            ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default WaveList;

// const truncate = (str: string) => {
//   return `${str.substr(0, 5)}...${str.substr(str.length - 5, 5)}`;
// };
