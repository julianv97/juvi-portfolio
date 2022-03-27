import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  register: any;
  errors: any;
  rules?: object;
}

const CustomInput: React.FC<Props> = ({ name, placeholder, label, register, errors, rules }) => {
  return (
    <FormControl isInvalid={errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} placeholder={placeholder} {...register(name, rules)} />
      <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
