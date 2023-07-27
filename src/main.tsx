import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './globalStyles.ts';
import { store } from './store.ts';
import '@fontsource/jost';
import '@fontsource/marcellus';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
