import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Blog from '../screens/Blog';
import SinglePostPage from '../screens/Blog/SinglePostPage';

const BlogRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/:id" element={<SinglePostPage />} />
      </Routes>
    </Layout>
  );
};

export default BlogRoutes;
