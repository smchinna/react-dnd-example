import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    background-color: rgb(255, 255, 255);
    min-height: 100%;
    min-width: 100%;
    color: rgb(6, 6, 6);
  }

  p,
  label {
    line-height: 1.5em;
    width: 100%;
  }
`;
