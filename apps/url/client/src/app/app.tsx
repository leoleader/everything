// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import axios from 'axios';
import {Container, Heading} from '@chakra-ui/react';
import {useCallback, useState } from 'react';

import {Shortened} from './types';
import UrlList from "./url-list";
import ShortenUrlForm from './shorten-url-form';

import stars from'/public/images/stars.jpeg';

// The App component contains all the other components, 
// namely the Container and Heading from chakra, a ShortenedUrlForm 
// which is where the user inputs and submits their urls and 
// UrlList which is where the generated urls are displayed.   

export function App() {

  const [urls, setUrls] = useState<Array<Shortened>>([]);

  // requestShortUrl - a function that sends the orignal url
  // to our backend and recieves the original along with the shortened
  // version in response. 
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
    <Container bgImage={stars} w="100%" maxWidth="full" minH="2xl" marginBlock={12} textAlign="center">
      <Heading pt="4" fontSize="6xl" font-family = "sans-serif" color="#FFE81F">McCann's  Url  Shortener</Heading>
      <ShortenUrlForm requestShortUrl={requestShortUrl}/>
      <UrlList urls={urls} />
    </Container>
  );
}

export default App;
