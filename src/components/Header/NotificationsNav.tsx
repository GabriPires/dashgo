import { HStack, IconButton } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export const NotificationsNav = () => {
  return (
    <HStack
      spacing={{ base: 6, md: 8 }}
      mx={{ base: 6, md: 8 }}
      pr={{ base: 6, md: 8 }}
      py={1}
      color={'gray.300'}
      borderRightWidth={1}
      borderColor={'gray.700'}
    >
      <IconButton
        aria-label={'Notification button'}
        icon={<RiNotificationLine fontSize={20} />}
        variant={'unstyled'}
        minW={'unset'}
        h={'unset'}
      />
      <IconButton
        aria-label={'User button'}
        icon={<RiUserAddLine fontSize={20} />}
        variant={'unstyled'}
        minW={'unset'}
        h={'unset'}
      />
    </HStack>
  );
};
