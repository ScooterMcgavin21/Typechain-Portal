import React, { useState } from 'react';
import useDetectWallet from '../../hooks/useDetectWallet';
import useWaves from '../../hooks/useWaves';
import {
  FormContainer,
  Formx,
  LabelBox,
  TextAreax,
  WaveBtn,
} from './FormElements';

/**
 * Form Component
 */
const Form: React.FC = (): React.ReactElement => {
  const { wave } = useWaves();
  const [message, setMessage] = useState<string>('');
  const { currentAccount, isConnected } = useDetectWallet();
  return (
    <FormContainer>
      <h1>Hey nerd!</h1>
      <Formx
        onSubmit={(e) => {
          e.preventDefault();
          wave(message);
        }}
      >
        <LabelBox htmlFor='input'>Connect to Rinkeby and send a wave</LabelBox>
        <TextAreax
          required
          placeholder='👋 Wave'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {currentAccount && isConnected && (
          <WaveBtn type='submit'>Wave at Me</WaveBtn>
        )}
      </Formx>
    </FormContainer>
  );
};
export default Form;
