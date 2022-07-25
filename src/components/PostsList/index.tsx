import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CardPost from '../CardPost';
import POSTS from '../../data/postsList';
import { IPost } from '../../interfaces';
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
        const { id, title, date, image, lectureTime, path } = post;
        return (
          <Link to={`${path}`} key={id}>
            <CardPost
              key={id}
              title={title}
              date={date}
              image={image}
              id={id}
              lectureTime={lectureTime}
              isFiltered={isFiltered}
            />
          </Link>
        );
      })}
    </Flex>
  );
};

export default PostsList;
