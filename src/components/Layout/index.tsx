import React from 'react';
import { VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const variants = {
  initial: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout: React.FC<Props> = ({ children }) => {
  const FlexContainerAnimated = motion(VStack);
  return (
    <VStack width="100%" justifyContent="center" alignItems="center" minH="100vh">
      <Header />
      <FlexContainerAnimated
        width="60%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        flex={1}
        animate="enter"
        exit="exit"
        initial="initial"
        pos="relative"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        variants={variants}
      >
        {children}
      </FlexContainerAnimated>
      <Footer />
    </VStack>
  );
};

export default Layout;
