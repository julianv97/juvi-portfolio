import React from 'react';
import { Flex, HStack, Stack, Heading } from '@chakra-ui/react';
import ProjectBanner from '../../components/ProjectBanner';
import PROJECTS from '../../components/ProjectsList/constants';

const Projects = () => {
  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <HStack marginTop={20} width={['100%', '100%', '80%', '80%']}>
        <Stack w="100%" justifyContent="flex-start">
          <Heading pb={10}>Projects</Heading>
          {PROJECTS.map((project) => (
            <ProjectBanner
              key={project.title}
              title={project.title}
              description={project.description!}
              image={project.image!}
              github={project.repositoryLink}
              live={project.liveLink}
              technologies={project.technologies}
            />
          ))}
        </Stack>
      </HStack>
    </Flex>
  );
};

export default Projects;
