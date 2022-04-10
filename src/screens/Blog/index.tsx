import React, { useState } from 'react';
import { Heading, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import { CgSearch } from 'react-icons/cg';
import Section from '../../components/Section';
import PostsList from '../../components/PostsList';
import POSTS from '../../components/PostsList/constants';
import IPost from '../../interfaces';

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>(POSTS);

  const handleFilter = (filter: string) => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(filter.toLowerCase()),
    );
    setPosts(filteredPosts);
    if (filter.length === 0) setPosts(POSTS);
  };

  return (
    <Section title="Blog">
      <Text>
        Here you will be able to find posts on topics that were interesting to me and have helped me
        grow as a developer
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CgSearch color="gray.300" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search for a post by title"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </InputGroup>
      <PostsList posts={posts} amount={5} />
      <Stack>
        <Heading>Recommended Blogs</Heading>
        <Text>
          On a day-to-day basis I browse a lot, looking for information to solve problems, to create
          a feature for the projects I work on or simply to learn/understand something. Below I
          share some blogs (mainly Front-end) that I consider very valuable and that may be of use
          to you.
        </Text>
        <Text>CREAR UN GRID</Text>
      </Stack>
    </Section>
  );
};

export default Blog;
