import { Link, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import {UrlListProps} from './types';

// The UrlList component takes an Array<Shortened> urls as input,
// and displays them as an UnorderedList by mapping each Shortened
// to a ListItem. 

export const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <UnorderedList id="url-list" styleType="none" mt="10" textAlign="center">
        {urls.map((u) => (
          <ListItem mt="5">
            <Link href={u.short} color="#FFE81F">
            {u.short}
            </Link>{' '}
            <Text color="#FFE81F"> originally - {u.original}</Text>
          </ListItem>
        ))}
      </UnorderedList>
  );
};

export default UrlList;