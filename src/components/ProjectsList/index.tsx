import React from 'react';
import { Flex } from '@chakra-ui/react';
import CardProject from '../CardProject';
import PROJECTS from './constants';

interface Props {
  amount: number;
}

const Projects: React.FC<Props> = ({ amount = PROJECTS.length }) => {
  return (
    <Flex
      w="100%"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={['center', 'center', 'space-between']}
    >
      {PROJECTS.slice(0, amount).map((project) => {
        return <CardProject key={project.id} project={project} />;
      })}
    </Flex>
  );
};

export default Projects;
