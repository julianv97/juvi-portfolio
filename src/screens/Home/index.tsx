import React from 'react';
import { Flex, Heading, HStack, Stack, Text, Icon } from '@chakra-ui/react';
import { GiCoffeeCup } from 'react-icons/gi';
import Section from '../../components/Section';
import ProjectsList from '../../components/ProjectsList';
import PostsList from '../../components/PostsList';
import ButtonLine from '../../components/ButtonLine';

const Home = () => {
  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <Section>
        <HStack>
          <Stack justifyContent="flex-start">
            <Heading>Julián Vicente</Heading>
            <Text color="blue.500" fontSize="lg" fontWeight="regular" letterSpacing="tighter">
              FullStack Developer ( Web / Mobile / Self-Taught )
            </Text>
          </Stack>
          <Flex w="100%" justifyContent="flex-end">
            <Icon as={GiCoffeeCup} w="28" h="28" color="blue.700" />
          </Flex>
        </HStack>
      </Section>

      <Section title="Projects">
        <ProjectsList amount={2} />
        <ButtonLine title="View more" path="/projects" />
      </Section>

      <Section title="Latests Posts">
        <PostsList />
        <ButtonLine title="View more" path="/blog" />
      </Section>
    </Flex>
  );
};

export default Home;
