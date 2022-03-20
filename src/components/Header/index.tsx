import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, HStack, Divider, Stack } from '@chakra-ui/react';

import ThemeButton from '../ThemeButton';

const Header = () => {
  return (
    <Stack width="100%">
      <HStack height="24" justifyContent="space-between">
        <Flex width="50%" justifyContent="space-around">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </Flex>
        <Flex>
          <ThemeButton />
        </Flex>
      </HStack>
      <Divider />
    </Stack>
  );
};

export default Header;
