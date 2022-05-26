import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import NavList from '../Header/NavList';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton position="relative" left={0} />
        </DrawerHeader>

        <DrawerBody>
          <NavList />
          <i className="fa-solid fa-j" />
        </DrawerBody>

        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
