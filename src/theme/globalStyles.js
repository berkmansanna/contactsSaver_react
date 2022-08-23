import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { createTheme } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
${normalize}
html {
box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif ;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
button {
  display: block;
  cursor: pointer;
  padding: 0;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;
}
svg {
  fill: currentColor;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}


`;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#37464f',
    },
    secondary: {
      main: '#455a64',
    },
  },
});
