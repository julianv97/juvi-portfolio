import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  VStack,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.closeAll();
    toast({
      title: 'Email sent!',
      description: 'Thank you for your message!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    reset();
  };

  return (
    <VStack>
      <form
        style={{
          width: '70%',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* @ts-ignore */}
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
        </FormControl>
        {/* @ts-ignore */}
        <FormControl isInvalid={errors.email}>
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
        </FormControl>
        {/* @ts-ignore */}
        <FormControl isInvalid={errors.message}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            placeholder="message"
            {...register('message', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>{errors.message && 'Minimum length should be 4'}</FormErrorMessage>
        </FormControl>
        <Flex justifyContent="center" w="full">
          <Button w="60%" mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </VStack>
  );
};

export default ContactForm;
