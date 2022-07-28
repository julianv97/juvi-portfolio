import React from 'react';
import { Flex, HStack, Stack, Heading, Text } from '@chakra-ui/react';
import ListSkills from '../../components/ListSkills';
import SKILLS from './constants';

const About = () => {
  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <HStack marginTop={20} width={['100%', '100%', '80%', '80%']}>
        <Stack w="100%" justifyContent="flex-start">
          <Heading pb={10}>About Me</Heading>
          <Text fontSize="lg" lineHeight={8} pb={5}>
            Hi! I&apos;m Julián, a software developer from Argentina. I&apos;m currently working as
            a Front-End Developer for Web and Mobile applications in Radium Rocket.
          </Text>
          <Text fontSize="lg" pb={4}>
            I have passion for creating beautiful and functional interfaces.
          </Text>
          <Text fontSize="lg" pb={4}>
            Another area of IT that I find very interesting is DevOps in which I had experience
            configuring monorepos and creating pipelines for continuous integration and continuous
            deployment for Web and Mobile projects.
          </Text>
          <Text fontSize="lg" lineHeight={8} pb={5}>
            I stay focused on maintaining good practices and continuing to study to improve myself
            so that I can help others grow as a developer.
          </Text>
          <Heading size="lg" as="h3" pb={5}>
            This are some of my skills:
          </Heading>
          <ListSkills items={SKILLS} />
        </Stack>
      </HStack>
    </Flex>
  );
};

export default About;
