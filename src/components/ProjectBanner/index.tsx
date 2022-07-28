import React from 'react';
import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import IconLink from '../IconLink';

interface Props {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

const ProjectBanner: React.FC<Props> = ({
  title,
  description,
  image,
  github,
  live,
  technologies,
}) => {
  return (
    <Flex pb="36" w="100%" justifyContent="space-between">
      <Image borderRadius={7} w="28%" h="auto" position="absolute" src={image} />
      <Flex
        h="auto"
        minH="72"
        zIndex={2}
        direction="column"
        alignItems="end"
        justifyContent="space-around"
      >
        <Heading size="lg" as="h3" pb={5}>
          {title}
        </Heading>
        <Box
          w="60%"
          bg="blue.600"
          color="gray.800"
          p={3}
          borderRadius={7}
          _dark={{ bg: 'blue.900', color: 'white' }}
        >
          <Text fontSize="md" lineHeight={8} pb={5}>
            {description}
          </Text>
        </Box>
        <Flex w="38%" wrap="wrap" justifyContent="space-around">
          {technologies.slice(0, 3).map((tech) => (
            <Text fontSize="sm" lineHeight={8} pb={5}>
              {tech}
            </Text>
          ))}
        </Flex>
        <Flex justifyContent="space-between" w="20">
          <IconLink icon={AiFillGithub} href={github} target="_blank" rel="noreferrer" />
          <IconLink icon={FiExternalLink} href={live} target="_blank" rel="noreferrer" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectBanner;
