import React from 'react';
import { Flex, HStack, Divider, Stack } from '@chakra-ui/react';
import NavList from './NavList';
import ThemeButton from '../ThemeButton';

const Header = () => {
  return (
    <Stack width="100%">
      <HStack height="24" justifyContent="space-between">
        <Flex width="50%" justifyContent="space-around">
          <NavList />
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
