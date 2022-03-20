import React from 'react';
import { Flex, Text, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack width="100%" backgroundColor="red.200">
      <Flex justifyContent="center" width="full">
        <Text>Footer</Text>
      </Flex>
    </HStack>
  );
};

export default Footer;
