import React from 'react';
import { Button, Flex, Heading, Text, Box } from '@chakra-ui/react';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import ContactForm from '../../components/ContactForm';
import Section from '../../components/Section';

const Contacts = () => {
  return (
    <Section>
      <Heading size="xl" mb={10}>
        Contact
      </Heading>
      <Flex direction="column" alignItems="start">
        <Button leftIcon={<MdEmail size="30" />} bg="inherit" mb={6}>
          <a href="mailto:julian.vicente97s@gmail.com">Here is my email!</a>
        </Button>
        <Button leftIcon={<AiFillLinkedin size="30" />} bg="inherit" mb={6}>
          <a href="https://www.linkedin.com/in/julian-vicente/" target="_blank" rel="noreferrer">
            You can contact me in Linkedin!
          </a>
        </Button>
      </Flex>
      <Box pl={5} pb={7}>
        <Text fontWeight="semibold">
          Or you can send me an message using the form below. I will get back to you as soon as
          possible.
        </Text>
      </Box>
      <ContactForm />
    </Section>
  );
};

export default Contacts;
