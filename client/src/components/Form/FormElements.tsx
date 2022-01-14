import styled from 'styled-components';

/** <nav> tag */
export const FormContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 1rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
`;
export const Formx = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  margin: auto;
  position: relative;
`;

export const TextAreax = styled.textarea`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-width: 1px;
  width: 300px;
  height: 50px;
`;

export const WaveBtn = styled.button`
  border-color: #2196f3;
  color: dodgerblue;

  &:hover {
    background: #2196f3;
    color: white;
  }
`;
