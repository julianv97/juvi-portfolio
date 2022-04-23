import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ItemGrid from './ItemGrid';
import { RECOMMENDED_POSTS } from '../PostsList/constants';

const PostsGrid = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {RECOMMENDED_POSTS.map((post) => {
        const { id, title, description, url } = post;
        return (
          <GridItem>
            <ItemGrid key={id} title={title} description={description} url={url} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PostsGrid;