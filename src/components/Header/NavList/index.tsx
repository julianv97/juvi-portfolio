import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import NAV_LINKS from '../constants';

const NavList = () => {
  return (
    <Flex w="100%" flexDirection={['column', 'column', 'row']} justifyContent="space-between">
      {NAV_LINKS.map((link) => (
        <RouterLink key={link.name} to={link.path}>
          {link.name}
        </RouterLink>
      ))}
    </Flex>
  );
};

export default NavList;
