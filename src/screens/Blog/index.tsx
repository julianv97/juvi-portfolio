import React, { useState } from 'react';
import { Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Section from '../../components/Section';
import PostsList from '../../components/PostsList';
import POSTS from '../../data/postsList';
import IPost from '../../interfaces';
import SearchInput from '../../components/SearchInput';
import PostsGrid from '../../components/PostsGrid';

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>(POSTS);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilter = (filter: string) => {
    setIsFiltered(true);
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(filter.toLowerCase()),
    );
    setPosts(filteredPosts);
    if (filter.length === 0) setPosts(POSTS);
  };

  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <HStack marginTop={20} w="80%">
        <Stack w="100%" justifyContent="flex-start">
          <Heading>Blog</Heading>
          <Text>
            Here you will be able to find posts on topics that were interesting to me and have
            helped me grow as a developer
          </Text>
        </Stack>
      </HStack>

      <Section>
        <SearchInput handleFilter={handleFilter} />
        <PostsList posts={posts} amount={5} isFiltered={isFiltered} />
      </Section>

      <Section title="Recommended blogs">
        <Text>
          On a day-to-day basis I browse a lot, looking for information to solve problems, to create
          a feature for the projects I work on or simply to learn/understand something. Below I
          share some blogs (mainly Front-end) that I consider very valuable and that may be of use
          to you.
        </Text>
        <PostsGrid />
      </Section>
    </Flex>
  );
};

export default Blog;
