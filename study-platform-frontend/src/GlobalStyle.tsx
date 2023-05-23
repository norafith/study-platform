import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    all: unset;
    display: revert;
  }

  body {
    font-size: 16px;
    color: white;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
