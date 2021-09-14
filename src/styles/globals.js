import { startsWith } from "lodash";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";


const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  @keyframes move-clouds-back {
    from {background-position: 0 0;}
    to {background-position: 10000px 0}
  }

  @keyframes move-twinkle-back {
    from {background-position: 0 0;}
    to {background-position: 10000px 5000px}
  }

  .stars, .twinkling, .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block
  }

  .stars {
    background: #000;
    z-index: 0;
  }

`;

export default GlobalStyles;
