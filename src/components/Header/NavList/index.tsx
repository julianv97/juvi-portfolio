import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import NAV_LINKS from '../constants';

const NavList = () => {
  return (
    <Flex w="100%" flexDirection={['column', 'column', 'row']} justifyContent="space-between">
      {NAV_LINKS.map((link) => (
        <Box mt={['20px', '20px', '15px', '0px']} fontSize={['lg', 'lg', 'lg', 'lg']}>
          <RouterLink key={link.name} to={link.path}>
            {link.name}
          </RouterLink>
        </Box>
      ))}
    </Flex>
  );
};

export default NavList;
