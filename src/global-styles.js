import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      ::selection{
        color: black;
       background-color: #25d897;
      }
  }
  
  html,body{
    background: #1b1b1b;
    font-family: 'Urbanist', sans-serif;
  
  }
`;
