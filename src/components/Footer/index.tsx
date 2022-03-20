import React from 'react';
import { Text, HStack, Flex, Icon } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdRocket } from 'react-icons/io';

const Footer = () => {
  return (
    <HStack width="100%" backgroundColor="red.200" justifyContent="space-between">
      <Flex>
        <Text>Codeado con React y ChakraUI</Text>
      </Flex>
      <Flex>
        <Icon as={BsGithub} />
        <Icon as={BsLinkedin} />
        <Icon as={IoMdRocket} />
      </Flex>
    </HStack>
  );
};

export default Footer;
