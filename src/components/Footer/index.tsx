import React from 'react';
import { Text, HStack, Flex } from '@chakra-ui/react';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <HStack mt={20} justifyContent="space-between" height="14" width={['100%', '80%', '80%', '80%']}>
    <Text fontSize="sm" color="gray.500">
      Made with React, ChakraUI and a lot of
      <span role="img" aria-label="love">
        {' '}
        ☕️
      </span>{' '}
      by Julián Vicente
    </Text>

    <Flex>
      <SocialLinks />
    </Flex>
  </HStack>
);

export default Footer;
