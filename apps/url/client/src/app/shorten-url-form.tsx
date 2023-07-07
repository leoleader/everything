import {Button, Input} from '@chakra-ui/react'
import { FormEvent, useCallback, useState} from 'react'

type ShortenUrlFormProps = {
    requestShortUrl: (original: string) => Promise<void>;
  };

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
          borderColor="#FFE81F"
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="https://whatever.com"
        />
        <Button id="submit-btn" type="submit" color="black" size="lg">
          Generate
        </Button>
      </form>
    );
};

export default ShortenUrlForm;