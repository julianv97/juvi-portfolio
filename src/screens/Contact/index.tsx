import { Heading } from '@chakra-ui/react';
import React from 'react';
import ContactForm from '../../components/ContactForm';
import Section from '../../components/Section';

const Contacts = () => {
  return (
    <Section>
      <Heading size="md" mb={10}>
        You can contant me by email or the social networks what are in the footer!
      </Heading>
      <ContactForm />
    </Section>
  );
};

export default Contacts;
