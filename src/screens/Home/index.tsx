import React from 'react';
import { Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Section from '../../components/Section';
import ProjectsList from '../../components/ProjectsList';
import PostsList from '../../components/PostsList';
import ButtonLine from '../../components/ButtonLine';

const Home = () => {
  return (
    <>
      <Section>
        <HStack>
          <Stack justifyContent="flex-start">
            <Heading>Julián Vicente</Heading>
            <Text color="blue.200" fontSize="lg" fontWeight="regular" letterSpacing="tighter">
              FullStack Developer ( Web / Mobile / Self-Taught )
            </Text>
          </Stack>
        </HStack>
      </Section>

      <Section title="Projects">
        <ProjectsList />
        <ButtonLine title="View more" path="/projects" />
      </Section>

      <Section title="Latests Posts">
        <PostsList />
        <ButtonLine title="View more" path="/blog" />
      </Section>
    </>
  );
};

export default Home;
