/*globalStyles.ts*/
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }
  html {
    font-family: 'Lora', serif;
    background: rgba(31, 41, 55);
  }
  #root{
    margin:0 auto;
  }
`;

