import { createTheme } from '@mui/material';
import '@fontsource/roboto';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          border: 0,
          textDecoration: 'none',
        },
        ':root': {
          fontSize: '62.5%' /* 1rem = 10px */,
          fontFamily: "'Roboto', sans-serif",
        },
        body: {
          fontSize: '1.6rem',
          backgroundColor: '#F0F0F5',
        },
      },
    },
  },

  palette: {
    mode: 'light',

    primary: {
      main: '#5E80F6',
      light: '#4863F7',
      dark: '#3249CB',
    },

    grey: {
      50: '#F0F0F5',
      100: '#c2c2c2',
      200: '#64748b',
      300: '#4b5563',
      400: '#3a3a3a',
    },
  },

  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontSize: '1.6rem',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1536,
      xl: 1872,
    },
  },
});
