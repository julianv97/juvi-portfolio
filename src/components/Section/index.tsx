import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Section: React.FC<Props> = ({ title = '', children }) => {
  return (
    <Stack marginTop={20} width="80%">
      {title && (
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>
      )}
      <Stack>{children}</Stack>
    </Stack>
  );
};

export default Section;
