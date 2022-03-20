import React from 'react';
import { Flex, HStack, Icon } from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack width="100%" backgroundColor="red.200" justifyContent="space-between">
      <Flex width="50%" justifyContent="space-around">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Flex>
      <Flex>
        <Icon as={MdDarkMode} cursor="pointer" />
        <Icon as={BsFillSunFill} cursor="pointer" />
      </Flex>
    </HStack>
  );
};

export default Header;
