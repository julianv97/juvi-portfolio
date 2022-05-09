import React from 'react';
import { Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { GiCoffeeCup } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import ProjectsList from '../../components/ProjectsList';
import PostsList from '../../components/PostsList';
import ButtonLine from '../../components/ButtonLine';
import IconLink from '../../components/IconLink';
import POSTS from '../../data/postsList';

const Home = () => {
  const AnimatedIcon = motion(Flex);
  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <HStack marginTop={20} w="80%">
        <Stack w="100%" justifyContent="flex-start">
          <Heading>Julián Vicente</Heading>
          <Text color="blue.500" fontSize="lg" fontWeight="regular" letterSpacing="tighter">
            FullStack Developer ( Web / Mobile / Self-Taught )
          </Text>
        </Stack>
        <AnimatedIcon
          whileHover={{
            scale: 1.2,
          }}
          color="blue.500"
        >
          <IconLink
            icon={GiCoffeeCup}
            href="https://cafecito.app/julianv97"
            target="_blank"
            rel="noreferrer"
            size={100}
            hasTooltip
            label="Coffe?"
          />
        </AnimatedIcon>
      </HStack>

      <Section title="Projects">
        <ProjectsList amount={2} />
        <ButtonLine title="View more" path="/projects" />
      </Section>

      <Section title="Latests Posts">
        <PostsList posts={POSTS} amount={1} />
        <ButtonLine title="View more" path="/blog" />
      </Section>
    </Flex>
  );
};

export default Home;
