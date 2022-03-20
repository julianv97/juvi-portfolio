import React from 'react';
import { Text, HStack, Flex } from '@chakra-ui/react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <HStack height="14" width="100%" justifyContent="space-between">
      <Flex>
        <Text>Codeado con React y ChakraUI</Text>
      </Flex>
      <Flex>
        <SocialLinks />
      </Flex>
    </HStack>
  );
};

export default Footer;
