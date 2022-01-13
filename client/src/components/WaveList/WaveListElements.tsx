import styled from 'styled-components';

/** <Table> tag */
export const Table = styled.table`
  table-layout: fixed;
  border: 2px solid gray;
`;

/** Table Row <tr> tag */
export const Trow = styled.tr`
  border: 2px solid gray;
`;

/** Table Header <th> tag
 * - Waver, message, Timestamp -
 */
export const Waver = styled.th`
  width: 33.33%;
  border: 2px solid gray;
`;

export const Message = styled.th`
  width: 60%;
  border: 2px solid blue;
`;

export const Timestamp = styled.th`
  width: 33.33%;
  border: 2px solid red;
`;

/** Table Data <td> tag */
export const Tdata = styled.td`
  overflow-wrap: break-word;
  border: 2px solid gray;
`;
