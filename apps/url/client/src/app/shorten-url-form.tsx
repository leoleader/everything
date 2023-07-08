import {Button, Input} from '@chakra-ui/react'
import { FormEvent, useCallback, useState} from 'react'
import { ShortenUrlFormProps } from './types';

  // The ShortenUrlForm component takes function requestShortUrl as input
  // and on submit, uses this function to generate a shortened url. The form
  // itself is comprised of a chakra button and input. 
  export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({
    requestShortUrl,
  }) => {
    const [inputUrl, setInputUrl] = useState<string>('');
    const onSubmit = useCallback(
      async (event: FormEvent) => {
        event.preventDefault();
        await requestShortUrl(inputUrl);
        setInputUrl('');
      },
      [inputUrl, setInputUrl]
    );
    return (
        <form onSubmit={onSubmit}>
        <Input
          id = "url-input"
          size="lg"
          marginBlock={4}
          color="#FFE81F"
          value={inputUrl}
          maxWidth="4xl"
          focusBorderColor = "#FFE81F"
          borderColor="#FFE81F"
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="http://galaxyfarfaraway.com"
        />
        <Button ml ="5"  id="submit-btn" type="submit" color="black" size="lg">
          Generate
        </Button>
      </form>
    );
};

export default ShortenUrlForm;