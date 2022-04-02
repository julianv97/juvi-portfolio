import React, { useRef } from 'react';
import { Button, VStack, useToast, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import CustomInput from '../CustomInput';
import CustomTextArea from '../CustomTextArea';

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
  const form = useRef();
  const toast = useToast();

  const onSubmit = () => {
    toast.closeAll();

    emailjs
      .sendForm('service_3q0bws9', 'template_zciot1r', form.current, 'MoV0QBVeYeUrC283-')
      .then(() => {
        toast({
          title: 'Email sent!',
          description: 'Thank you for your message!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: 'Error',
          description: 'Something went wrong, please try again later.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });

    reset();
  };

  return (
    <VStack>
      <form
        ref={form}
        style={{
          width: '70%',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomInput
          name="name"
          placeholder="Your name"
          label="Name"
          register={register}
          errors={errors.name}
          rules={{
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          }}
        />

        <CustomInput
          name="email"
          placeholder="Your email"
          label="Email"
          register={register}
          errors={errors.email}
          rules={{
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          }}
        />

        <CustomTextArea
          name="message"
          placeholder="Your message"
          label="Message"
          register={register}
          errors={errors.message}
          rules={{
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          }}
        />
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
