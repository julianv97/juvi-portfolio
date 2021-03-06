import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import Header from '../Header';
import VARIANTS from './constans';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const FlexContainerAnimated = motion(VStack);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      justifyContent="center"
      minH="100vh"
    >
      <Header />
      <FlexContainerAnimated
        width={['90%', '80%', '70%', '60%']}
        h="full"
        flexDirection="column"
        alignItems="center"
        flex={1}
        animate="enter"
        exit="exit"
        initial="initial"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        variants={VARIANTS}
      >
        {children}
      </FlexContainerAnimated>
      <Footer />
    </Flex>
  );
};

export default Layout;
