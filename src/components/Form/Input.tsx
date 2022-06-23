import { forwardRef, ForwardRefRenderFunction } from 'react';
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

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...props },
  ref,
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        ref={ref}
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

export const Input = forwardRef(InputBase);
