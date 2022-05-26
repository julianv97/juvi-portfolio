import React, { useRef } from 'react';
import {
  Flex,
  HStack,
  Divider,
  Stack,
  useDisclosure,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { HiMenuAlt4 } from 'react-icons/hi';
import NavList from './NavList';
import ThemeButton from '../ThemeButton';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Stack width={['100%', '80%', '80%', '80%']}>
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
      {/* @ts-ignore */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton margin={2} ml={5} position="relative" left={0} />
          </DrawerHeader>

          <DrawerBody>
            <NavList />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Header;
