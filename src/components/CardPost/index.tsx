import React from 'react';
import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { VARIANTS } from './constants';

interface Props {
  id: number;
  title: string;
  date: string;
  image: string;
  isFiltered: boolean;
}

const CardPost: React.FC<Props> = ({ title, date, image, id, isFiltered }) => {
  const color = useColorModeValue('gray.200', 'gray.700');
  const AnimatedBox = motion(Flex);

  return (
    <AnimatedBox
      borderRadius={10}
      animate="enter"
      exit="exit"
      initial="initial"
      transition={{ duration: 0.5, delay: id * 0.3 }}
      variants={isFiltered ? null : VARIANTS}
      mb={5}
    >
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
    </AnimatedBox>
  );
};

export default CardPost;
