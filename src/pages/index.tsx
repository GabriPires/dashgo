import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input type={'email'} label={'E-mail'} {...register('email')} />
          <Input type={'password'} label={'Senha'} {...register('password')} />
        </Stack>

        <Button
          type={'submit'}
          mt={6}
          colorScheme={'purple'}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
