import React from 'react';
import { Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Section from '../../components/Section';
import Projects from '../../components/Home/Projects';
import LatestsPosts from '../../components/Home/LatestsPosts';

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
      <Projects />
      <LatestsPosts />
    </>
  );
};

export default Home;
