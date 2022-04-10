import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import TooltipIcon from '../TooltipIcon';

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(MdDarkMode, BsFillSunFill);

  return (
    <TooltipIcon
      label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
      icon={Icon}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeButton;
