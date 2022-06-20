import { Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Text
      fontSize={{ base: '2xl', md: '3xl' }}
      fontWeight={'bold'}
      letterSpacing={'tight'}
      w={64}
    >
      dashgo
      <Text as={'span'} ml={1} color={'pink.500'}>
        .
      </Text>
    </Text>
  );
};
