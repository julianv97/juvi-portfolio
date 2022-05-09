import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePostPage: React.FC = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SinglePostPage;
