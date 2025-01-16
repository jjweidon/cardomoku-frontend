import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'KOHI';
    src: url('/Users/weidon/Library/Fonts/KOHIBaeumOTF.otf') format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'KOHI', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle; 