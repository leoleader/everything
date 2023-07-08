import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { DarkMode, ChakraProvider} from '@chakra-ui/react';
import App from './app/app';
import {theme} from "./themes"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <DarkMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </DarkMode>
  </StrictMode>
);
