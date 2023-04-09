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
        body: {
          backgroundColor: '#f8f7fc',
        },
      },
    },

    MuiAccordionDetails: {
      defaultProps: {
        style: {
          maxHeight: '80vh',
          overflowY: 'auto',
        },
      },
      styleOverrides: {
        root: {
          '::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: '#f8f7fc',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#9E9E9E',
          },

          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#757575',
          },
        },
      },
    },
  },

  palette: {
    secondary: {
      light: '#7c3aed',
      main: '#5c00be',
      dark: '#4c1d95',
    },

    success: {
      light: '#ddf4f2',
      main: '#00a28d',
      dark: '#064e3b',
    },
  },

  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,

    h4: {
      fontWeight: 600,
    },

    h5: {
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
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
