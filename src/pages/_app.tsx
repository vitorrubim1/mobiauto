import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { responsiveFontSizes, ThemeProvider, CssBaseline } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

import { FipeProvider } from '@hooks/useFipe';

import { theme } from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FipeProvider>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline>
          <Component {...pageProps} />
          <ToastContainer />
        </CssBaseline>
      </ThemeProvider>
    </FipeProvider>
  );
}
