import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'KOHI';
    src: url('/static/fonts/KOHIBaeumOTF.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'KOHI', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    /* 모바일에서 가로 모드 강제 */
    @media screen and (orientation: portrait) {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      height: 100vw;
      overflow-x: hidden;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    
    /* 모바일 최적화 */
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle; 