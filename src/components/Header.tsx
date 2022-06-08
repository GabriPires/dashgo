import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  RiNotification4Line,
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';

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
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        letterSpacing={'tight'}
        w={'64'}
      >
        dashgo
        <Text as={'span'} ml={1} color={'pink.500'}>
          .
        </Text>
      </Text>

      <Flex
        as={'label'}
        flex={1}
        py={4}
        px={8}
        ml={6}
        maxW={400}
        alignSelf={'center'}
        color={'gray.200'}
        position={'relative'}
        bg={'gray.800'}
        borderRadius={'full'}
      >
        <Input
          color={'gray.50'}
          variant={'unstyled'}
          placeholder={'Buscar na plataforma'}
          _placeholder={{ color: 'gray.400' }}
          px={4}
          mr={4}
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>

      <Flex align={'center'} ml={'auto'}>
        <HStack
          spacing={8}
          mx={8}
          pr={8}
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

        <Flex align={'center'}>
          <Box mr={4} textAlign={'right'}>
            <Text>Gabriel Pires</Text>
            <Text color={'gray.300'} fontSize={'sm'}>
              gabpires@email.com
            </Text>
          </Box>
          <Avatar
            size={'md'}
            name={'Gabriel Pires'}
            src={'https://github.com/GabriPires.png'}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
