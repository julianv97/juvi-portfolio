import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeRoutes from './home';
import ContactRoutes from './contact';
import AboutRoutes from './about';
import ProjectsRoutes from './projects';
import BlogRoutes from './blog';

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeRoutes />} />
      <Route path="/projects/*" element={<ProjectsRoutes />} />
      <Route path="/contact" element={<ContactRoutes />} />
      <Route path="/blog/*" element={<BlogRoutes />} />
      <Route path="/about" element={<AboutRoutes />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Router;
