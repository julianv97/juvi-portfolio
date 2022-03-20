import React from 'react';
import { Flex, HStack, Text, Icon } from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

const Header = () => {
  return (
    <HStack width="100%" backgroundColor="red.200" justifyContent="space-between">
      <Flex width="50%" justifyContent="space-around">
        <Text>Home</Text>
        <Text>Projects</Text>
        <Text>Blog</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </Flex>
      <Flex>
        <Icon as={MdDarkMode} />
        <Icon as={BsFillSunFill} />
      </Flex>
    </HStack>
  );
};

export default Header;
