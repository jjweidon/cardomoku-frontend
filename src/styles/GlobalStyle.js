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

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    
    /* 모바일 최적화 */
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }

  /* 모바일에서 가로 모드 강제 */
  @media screen and (orientation: portrait) {
    html {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      height: 100vw;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }

  /* 앱 컨테이너 */
  #root > div {
    width: 100%;
    height: 100%;
    max-width: 896px;  /* iPhone 14 Pro Max 가로 해상도 */
    max-height: 414px; /* iPhone 14 Pro Max 세로 해상도 */
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  /* 모바일 가로 모드 최적화 */
  @media screen and (max-width: 896px) {
    html {
      font-size: 14px;
    }

    #root > div {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 667px) {
    html {
      font-size: 12px;
    }
  }
`;

export default GlobalStyle; 