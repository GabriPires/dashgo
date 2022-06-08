import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor={'pink.500'}
        bg={'gray.900'}
        variant={'filled'}
        size={'lg'}
        _hover={{
          bg: 'gray.900',
        }}
        {...props}
      />
    </FormControl>
  );
};
