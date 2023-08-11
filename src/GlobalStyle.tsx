import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'apija';
    src: url("../src/asset/font/Apija-demo.otf");
}

@font-face {
    font-family: 'bebas';
    src: url("../src/asset/font/BebasNeue-Regular.otf");
}

@font-face {
    font-family: 'roboto';
    src: url("../src/asset/font/Roboto-Regular.ttf");
}
      ${reset}

  body {
    box-sizing: border-box;
    font-family:'roboto';
  }

  button {
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
    }

    img {
      vertical-align: top;
    }

  /* blind */
    .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    }
`;

export default GlobalStyle;
