import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

const Home = () => {
  return (
    <Flex w={'100vw'} h={'100vh'} align={'center'} justify={'center'}>
      <Flex
        as={'form'}
        flexDir={'column'}
        w={'100%'}
        maxW={'360px'}
        bg={'gray.800'}
        p={8}
        borderRadius={8}
      >
        <Stack spacing={4}>
          <Input type={'email'} name={'email'} label={'E-mail'} />
          <Input type={'password'} name={'password'} label={'Senha'} />
        </Stack>

        <Button type={'submit'} mt={6} colorScheme={'purple'}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
