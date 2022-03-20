import { VStack } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <VStack>
      <Header />
      {children}
      <Footer />
    </VStack>
  );
};

export default Layout;
