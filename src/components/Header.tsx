import { Flex, Icon, Input, Text } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

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
    </Flex>
  );
};
