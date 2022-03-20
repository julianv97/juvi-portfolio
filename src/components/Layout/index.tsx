import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <VStack width="100%" height="100vh">
      <Flex
        width="full"
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
