import styled from 'styled-components';

/** <nav> tag */
export const FormContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 1rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(65deg, #3a05c5, #44014c);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa,
    1px 1px 2px #555;
  backdrop-filter: blur(0.8rem);
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
  color: white;
  width: 300px;
  height: 50px;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 5px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
  }
`;

export const LabelBox = styled.label`
  margin: 1rem;
  font-size: 15px;
  color: white;
`;

export const WaveBtn = styled.button`
  cursor: pointer;
  color: #0ff;
  border: 1px solid #0ff;
  margin-top: 5px;
  width: 50%;
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  text-align: center;
  margin: auto;
  justify-content: center;
  display: flex;
  border-radius: 5px;

  &:hover {
    background: #0ff;
    color: white;
    box-shadow: 0 0 50px #0ff, 0 0 21px #0ff;
    border: 1px solid white;
  }
`;
