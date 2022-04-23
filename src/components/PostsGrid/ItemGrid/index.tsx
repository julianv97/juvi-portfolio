import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  url: string;
}

const ItemGrid: React.FC<Props> = ({ title, description, url }) => {
  const color = useColorModeValue('gray.200', 'gray.700');
  const AnimatedBox = motion(Flex);

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <AnimatedBox
        whileHover={{
          scale: 1.05,
        }}
        _hover={{
          backgroundColor: color,
        }}
        mb={1}
        borderRadius={10}
        borderColor={color}
        borderWidth={1}
        cursor="pointer"
        w="100%"
        minHeight="120px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          pt={5}
          pl={4}
          width="100%"
          h="full"
          minHeight="120px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {title}
          </Text>
          <Text fontWeight="light" fontSize="sm">
            {description}
          </Text>
        </Flex>
      </AnimatedBox>
    </a>
  );
};

export default ItemGrid;
