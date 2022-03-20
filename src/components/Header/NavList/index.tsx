import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NAV_LINKS from '../constants';

const NavList = () => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <RouterLink key={link.name} to={link.path}>
          {link.name}
        </RouterLink>
      ))}
    </>
  );
};

export default NavList;
