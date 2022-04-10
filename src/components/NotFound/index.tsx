import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  text: string;
}

const NotFound: React.FC<Props> = ({ text }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      borderRadius={10}
      borderColor="gray.200"
      p={4}
    >
      <Text fontSize="lg" fontWeight="bold">
        {text}
      </Text>
    </Flex>
  );
};

export default NotFound;
