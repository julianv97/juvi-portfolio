import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  register: any;
  errors?: any;
  rules?: object;
}

const CustomTextArea: React.FC<Props> = ({ name, placeholder, label, register, errors, rules }) => {
  return (
    <FormControl isInvalid={errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Textarea id={name} placeholder={placeholder} {...register(name, rules)} />
      <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomTextArea;
