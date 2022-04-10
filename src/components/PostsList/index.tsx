import React from 'react';
import { Flex } from '@chakra-ui/react';
import CardPost from '../CardPost';
import POSTS from './constants';
import IPost from '../../interfaces';

interface Props {
  posts: IPost[];
  amount: number;
}

const PostsList: React.FC<Props> = ({ posts, amount = POSTS.length }) => {
  return (
    <Flex w="100%" flexDirection="column">
      {posts.slice(0, amount).map((post) => {
        const { id, title, date, image } = post;
        return <CardPost key={id} title={title} date={date} image={image} />;
      })}
    </Flex>
  );
};

export default PostsList;
