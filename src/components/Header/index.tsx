import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export const Header: React.FC = () => {
  return (
    <Flex
      as={'header'}
      w={'100%'}
      align={'center'}
      maxW={'1480px'}
      h={'20'}
      mx={'auto'}
      mt={'4'}
      px={'6'}
    >
      <Logo />

      <SearchBox />

      <Flex align={'center'} ml={'auto'}>
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};
