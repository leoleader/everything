import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { DarkMode, ChakraProvider} from '@chakra-ui/react';
import App from './app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <DarkMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </DarkMode>
  </StrictMode>
);
