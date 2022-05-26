import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ItemGrid from './ItemGrid';
import { RECOMMENDED_POSTS } from '../../data/postsList';

const PostsGrid = () => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={6}
    >
      {RECOMMENDED_POSTS.map((post) => {
        const { id, title, description, url } = post;
        return (
          <GridItem key={id}>
            <ItemGrid title={title} description={description} url={url} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PostsGrid;
