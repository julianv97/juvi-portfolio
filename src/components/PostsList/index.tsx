import React from 'react';
import { Flex } from '@chakra-ui/react';
import CardPost from '../CardPost';
import POSTS from './constants';
import IPost from '../../interfaces';
import NotFound from '../NotFound';

interface Props {
  posts: IPost[];
  amount: number;
  isFiltered?: boolean;
}

const PostsList: React.FC<Props> = ({ posts, amount = POSTS.length, isFiltered }) => {
  if (posts.length === 0) return <NotFound text="No post found" />;

  return (
    <Flex w="100%" flexDirection="column">
      {posts.slice(0, amount).map((post) => {
        const { id, title, date, image } = post;
        return (
          <CardPost
            key={id}
            title={title}
            date={date}
            image={image}
            id={id}
            isFiltered={isFiltered}
          />
        );
      })}
    </Flex>
  );
};

export default PostsList;
