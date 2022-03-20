import React from 'react';
import { Flex, HStack, Icon, Divider, Stack, Tooltip, Box } from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';

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
          <Tooltip label="Dark mode">
            <Box>
              <Icon boxSize={34} as={MdDarkMode} cursor="pointer" />
            </Box>
          </Tooltip>
          <Tooltip label="Light mode">
            <Box>
              <Icon boxSize={34} as={BsFillSunFill} cursor="pointer" />
            </Box>
          </Tooltip>
        </Flex>
      </HStack>
      <Divider />
    </Stack>
  );
};

export default Header;
