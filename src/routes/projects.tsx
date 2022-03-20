import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Projects from '../screens/Projects';

const ProjectsRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </Layout>
  );
};

export default ProjectsRoutes;
