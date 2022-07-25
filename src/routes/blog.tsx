import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Blog from '../screens/Blog';
import TypescriptPostPage from '../screens/Blog/TypescriptPostPage';

const BlogRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/typescript-importance" element={<TypescriptPostPage />} />
      </Routes>
    </Layout>
  );
};

export default BlogRoutes;
