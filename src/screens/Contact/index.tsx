import React from 'react';
import { Button, Flex, Heading, Text, Box, Link } from '@chakra-ui/react';
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
        <Link style={{ textDecoration: 'none' }} href="mailto:julian.vicente97s@gmail.com">
          <Button leftIcon={<MdEmail size="30" />} bg="inherit" mb={6}>
            <Text>Here is my email!</Text>
          </Button>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href="https://www.linkedin.com/in/julian-vicente/"
          target="_blank"
          rel="noreferrer"
        >
          <Button leftIcon={<AiFillLinkedin size="30" />} bg="inherit" mb={6}>
            <Text>You can contact me in Linkedin!</Text>
          </Button>
        </Link>
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
