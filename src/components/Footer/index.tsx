import React from 'react';
import { Text, HStack, Flex } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdRocket } from 'react-icons/io';
import CustomLink from '../IconLink';

const Footer = () => {
  return (
    <HStack width="100%" backgroundColor="red.200" justifyContent="space-between">
      <Flex>
        <Text>Codeado con React y ChakraUI</Text>
      </Flex>
      <Flex>
        <CustomLink
          href="https://github.com/julianv97"
          target="_blank"
          rel="noreferrer"
          icon={BsGithub}
        />

        <CustomLink
          href="https://www.linkedin.com/in/julian-vicente/"
          target="_blank"
          rel="noreferrer"
          icon={BsLinkedin}
        />

        <CustomLink
          href="https://radiumrocket.com/"
          target="_blank"
          rel="noreferrer"
          icon={IoMdRocket}
        />
      </Flex>
    </HStack>
  );
};

export default Footer;
