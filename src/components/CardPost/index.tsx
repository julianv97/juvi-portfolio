import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  date: string;
  image: string;
}

const CardPost: React.FC<Props> = ({ title, date, image }) => {
  const color = useColorModeValue('gray.200', 'gray.700');
  const AnimatedBox = motion(Flex);
  return (
    <AnimatedBox
      whileHover={{
        scale: 1.05,
      }}
      _hover={{
        backgroundColor: color,
      }}
      mb={5}
      borderRadius={10}
      cursor="pointer"
    >
      <Image borderLeftRadius={10} src={image} />
      <Flex flexDirection="column" justifyContent="space-between" pl={2}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text fontWeight="light" fontSize="sm">
          {date}
        </Text>
      </Flex>
    </AnimatedBox>
  );
};

export default CardPost;
