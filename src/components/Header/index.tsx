import React from 'react';
import { Flex, HStack, Icon } from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <HStack width="100%" backgroundColor="red.200" justifyContent="space-between">
      <Flex width="50%" justifyContent="space-around">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </Flex>
      <Flex>
        <Icon as={MdDarkMode} cursor="pointer" />
        <Icon as={BsFillSunFill} cursor="pointer" />
      </Flex>
    </HStack>
  );
};

export default Header;
