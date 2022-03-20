import React from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack width="100%" backgroundColor="red.200">
      <Flex width="full" justifyContent="center">
        <Text>Header</Text>
      </Flex>
    </HStack>
  );
};

export default Header;
