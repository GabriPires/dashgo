import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export const Header: React.FC = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && (
        <IconButton
          variant={'unstyled'}
          aria-label={'Abrir menu'}
          display={'flex'}
          alignItems={'center'}
          fontSize={24}
          mr={2}
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align={'center'} ml={'auto'}>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
