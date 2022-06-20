import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const Profile = () => {
  return (
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
  );
};
