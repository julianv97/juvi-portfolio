import React from 'react';
import { Flex } from '@chakra-ui/react';
import CardProject from '../CardProject';
import PROJECTS from './constants';

interface Props {
  amount: number;
}

const Projects: React.FC<Props> = ({ amount = PROJECTS.length }) => {
  return (
    <Flex w="100%" flexWrap="wrap" justifyContent="space-between ">
      {PROJECTS.slice(0, amount).map((project) => {
        const { id, title, technologies, link } = project;
        return <CardProject key={id} title={title} technologies={technologies} link={link} />;
      })}
    </Flex>
  );
};

export default Projects;
