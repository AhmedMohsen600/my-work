import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  html,body{
    background: #1b1b1b;
    font-family: 'Urbanist', sans-serif;
  }
`;
