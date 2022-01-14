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

  width: 100%;
`;

/** Table Row <tr> tag */
export const Trow = styled.tr``;

/** Table Header <th> tag
 * - Waver, message, Timestamp -
 */
export const Waver = styled.th`
  width: 33.33%;
`;

export const Message = styled.th`
  width: 60%;
`;

export const Timestamp = styled.th`
  width: 33.33%;
`;

/** Table Data <td> tag */
export const Tdata = styled.td`
  overflow-wrap: break-word;
`;
