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
        <a href="https://github.com/julianv97" target="_blank" rel="noreferrer">
          <Icon as={BsGithub} />
        </a>
        <a href="https://www.linkedin.com/in/julian-vicente/" target="_blank" rel="noreferrer">
          <Icon as={BsLinkedin} />
        </a>
        <a href="https://radiumrocket.com/" target="_blank" rel="noreferrer">
          <Icon as={IoMdRocket} />
        </a>
      </Flex>
    </HStack>
  );
};

export default Footer;
