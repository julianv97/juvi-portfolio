import React from 'react';
import { Badge, Box, Flex, Text, Image } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import IconLink from '../IconLink';
import { COLORS, VARIANTS } from './constants';

interface Props {
  title: string;
  technologies: string[];
  link: string;
  id: number;
}

const CardProject: React.FC<Props> = ({ title, technologies, link, id }) => {
  const AnimatedBox = motion(Box);
  const AnimatedImage = motion(Image);
  return (
    <AnimatedBox
      borderRadius={10}
      p="5"
      mb={5}
      borderWidth={1}
      borderColor="blue.500"
      w="45%"
      animate="enter"
      exit="exit"
      initial="initial"
      transition={{ duration: 0.5, delay: id * 0.3 }}
      variants={VARIANTS}
    >
      <Flex>
        <Box w="100%" mr={5}>
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        </Box>
        <Flex w="40%" justifyContent="space-around">
          <IconLink icon={AiFillGithub} href={link} target="_blank" rel="noreferrer" />
          <IconLink icon={FiExternalLink} href={link} target="_blank" rel="noreferrer" />
        </Flex>
      </Flex>
      <Flex w="full" flexWrap="wrap">
        {technologies.map((stack) => {
          const color = COLORS.find((colorItem) => colorItem.stack === stack);
          return (
            <Badge marginY={1} mb={2} mr={5} key={stack} colorScheme={color?.color}>
              {stack}
            </Badge>
          );
        })}
      </Flex>
      <AnimatedImage
        borderRadius={10}
        boxSize="200px"
        w="100%"
        src="https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </AnimatedBox>
  );
};

export default CardProject;
