import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 36rem;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

/** <Table> tag */
export const Table = styled.table`
  table-layout: fixed;

  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa,
    1px 1px 2px #555;
  backdrop-filter: blur(0.8rem);
  width: 100%;
`;

/** Table Row <tr> tag */
export const Trow = styled.tr``;

/** Table Header <th> tag
 * - Waver, message, Timestamp -
 */
export const Waver = styled.th`
  width: 33.33%;
  border-bottom: 0.5px solid aqua;
  padding-bottom: 10px;
  padding-top: 10px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  color: aqua;
`;

export const Message = styled.th`
  width: 60%;
  border-bottom: 0.5px solid aqua;
  padding-bottom: 10px;
  padding-top: 10px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  color: aqua;
`;

export const Timestamp = styled.th`
  width: 33.33%;
  border-bottom: 0.5px solid aqua;
  padding-bottom: 10px;
  padding-top: 10px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  color: aqua;
`;

/** Table Data <td> tag */
export const Tdata = styled.td`
  overflow-wrap: break-word;
  color: white;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid gray;
`;
