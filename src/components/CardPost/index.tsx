import React from 'react';
import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { VARIANTS } from './constants';

interface Props {
  id: number;
  title: string;
  date: string;
  image: string;
  lectureTime?: string;
  isFiltered: boolean | undefined;
}

const CardPost: React.FC<Props> = ({ title, date, image, id, lectureTime, isFiltered }) => {
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
        <Image src={image} borderLeftRadius={10} w={100} h={100} />
        <Flex w="100%" flexDirection="column" justifyContent="space-between" pl={2} paddingY={2}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {title}
          </Text>
          <Flex justifyContent="space-between">
            <Text fontWeight="light" fontSize="sm">
              {date}
            </Text>
            <Text fontWeight="light" fontSize="sm" mr={2}>
              {lectureTime}
            </Text>
          </Flex>
        </Flex>
      </AnimatedBox>
    </AnimatedBox>
  );
};

export default CardPost;
