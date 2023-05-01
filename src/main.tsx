import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from './globalStyles.ts';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/jost';
import '@fontsource/marcellus';
const extendedTheme = extendTheme(theme);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={extendedTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
