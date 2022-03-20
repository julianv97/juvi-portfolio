import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <VStack justifyContent="center" alignItems="center" width="100%" height="100vh">
      <Flex
        width="60%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        flex={1}
      >
        <Header />
        {children}
        <Footer />
      </Flex>
    </VStack>
  );
};

export default Layout;
