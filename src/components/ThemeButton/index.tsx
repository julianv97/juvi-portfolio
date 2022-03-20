import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import TooltipIcon from '../TooltipIcon';

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <TooltipIcon
      label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
      icon={colorMode === 'light' ? MdDarkMode : BsFillSunFill}
      onClick={toggleColorMode}
    >
      index
    </TooltipIcon>
  );
};

export default ThemeButton;
