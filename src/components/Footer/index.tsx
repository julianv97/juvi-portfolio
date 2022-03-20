import React from 'react';
import { Text, HStack, Flex } from '@chakra-ui/react';
import { MdCoffee } from 'react-icons/md';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <HStack mt={20} justifyContent="space-between" height="14" width="60%">
      <Flex>
        <Text>Made with React, ChakraUI and a lot of </Text>
        <MdCoffee size="1.5em" />
      </Flex>
      <Flex>
        <SocialLinks />
      </Flex>
    </HStack>
  );
};

export default Footer;
