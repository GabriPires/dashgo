import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

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
          <Input
            type={'email'}
            label={'E-mail'}
            error={errors.email}
            {...register('email')}
          />
          <Input
            type={'password'}
            label={'Senha'}
            error={errors.password}
            {...register('password')}
          />
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
