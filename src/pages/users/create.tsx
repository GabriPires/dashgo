import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
});

const CreateUser = () => {
  const router = useRouter();

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values,
  ) => {
    await createUser.mutateAsync(values);
    router.push('/users');
  };

  return (
    <Box>
      <Header />
      <Flex w={'100%'} my={6} maxW={1480} mx={'auto'} px={6}>
        <Sidebar />

        <Box
          as={'form'}
          flex={'1'}
          borderRadius={8}
          bg={'gray.800'}
          p={{ base: 6, md: 8 }}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={'lg'} fontWeight={'normal'}>
            Criar usuário
          </Heading>
          <Divider my={6} borderColor={'gray.700'} />

          <VStack spacing={8}>
            <SimpleGrid
              minChildWidth={'240px'}
              spacing={{ base: 6, md: 8 }}
              w={'100%'}
            >
              <Input
                label={'Nome completo'}
                error={errors.name}
                {...register('name')}
              />
              <Input
                type={'email'}
                label={'Email'}
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth={'240px'}
              spacing={{ base: 6, md: 8 }}
              w={'100%'}
            >
              <Input
                type={'password'}
                label={'Senha'}
                error={errors.password}
                {...register('password')}
              />
              <Input
                type={'password'}
                label={'Confirmação da senha'}
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={8} justify={'flex-end'}>
            <HStack spacing={4}>
              <Link href={'/users'} passHref>
                <Button as={'a'} colorScheme={'whiteAlpha'} color={'white'}>
                  Cancelar
                </Button>
              </Link>
              <Button
                type={'submit'}
                colorScheme={'pink'}
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
