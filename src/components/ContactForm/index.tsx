import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Your name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="email"
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>

        <FormLabel htmlFor="email">Message</FormLabel>
        <Textarea
          id="message"
          placeholder="message"
          {...register('message', {
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
