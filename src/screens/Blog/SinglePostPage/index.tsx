import React from 'react';
import { Flex, HStack, Stack, Heading, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import POSTS from '../../../data/postsList';

const SinglePostPage: React.FC = () => {
  const { id } = useParams();
  const post = POSTS.find((postItem) => postItem.id === Number(id));
  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <HStack marginTop={20} w="80%">
        <Image src={post?.image} />
        <Stack w="100%" justifyContent="flex-start">
          <Heading fontSize={30}>{post?.title}</Heading>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default SinglePostPage;
