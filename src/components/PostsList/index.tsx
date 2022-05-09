import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
          <Link to={`/blog/${id}`} key={id}>
            <CardPost
              key={id}
              title={title}
              date={date}
              image={image}
              id={id}
              isFiltered={isFiltered}
            />
          </Link>
        );
      })}
    </Flex>
  );
};

export default PostsList;
