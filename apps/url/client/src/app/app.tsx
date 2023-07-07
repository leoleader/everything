// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import axios from 'axios';
import {Container, Heading} from '@chakra-ui/react';
import {useCallback, useState } from 'react';

import Shortened from './types';
import UrlList from "./url-list";
import ShortenUrlForm from './shorten-url-form';



export function App() {

  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened

      setUrls([newUrl, ...urls])
    },
    [urls, setUrls]
  );

  return (
    <Container bg="black" maxWidth="4xl" minH="2xl" marginBlock={12} textAlign="center">
      <Heading pt="4" color="#FFE81F">McCann's URL Shortener</Heading>
      <ShortenUrlForm requestShortUrl={requestShortUrl}/>
      <UrlList urls={urls} />
    </Container>
  );
}

export default App;
