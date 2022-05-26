import React from 'react';
import { Flex, HStack, Divider, Stack, useDisclosure, Box } from '@chakra-ui/react';
import { HiMenuAlt4 } from 'react-icons/hi';
import NavList from './NavList';
import ThemeButton from '../ThemeButton';
import CustomDrawer from '../CustomDrawer';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack width={['100%', '80%', '80%', '60%']}>
      <HStack height="24" justifyContent="space-between">
        <Box display={['block', 'block', 'none']}>
          <HiMenuAlt4
            size="24"
            onClick={isOpen ? onClose : onOpen}
            cursor="pointer"
            color="gray.500"
          />
        </Box>
        <Box width="50%" display={['none', 'none', 'flex']}>
          <NavList />
        </Box>
        <Flex>
          <ThemeButton />
        </Flex>
      </HStack>
      <Divider />
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default Header;
