import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Section: React.FC<Props> = ({ title = '', children }) => {
  return (
    <Stack width="80%" justifyContent="flex-start">
      <Heading as="h2" size="lg" mb={4}>
        {title}
      </Heading>
      <Stack>{children}</Stack>
    </Stack>
  );
};

export default Section;
