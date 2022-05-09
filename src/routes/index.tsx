import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const HomeRoutes = lazy(() => import('./home'));
const ProjectsRoutes = lazy(() => import('./projects'));
const ContactRoutes = lazy(() => import('./contact'));
const BlogRoutes = lazy(() => import('./blog'));
const AboutRoutes = lazy(() => import('./about'));

const Router = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/home" element={<HomeRoutes />} />
        <Route path="/projects/*" element={<ProjectsRoutes />} />
        <Route path="/contact" element={<ContactRoutes />} />
        <Route path="/blog/*" element={<BlogRoutes />} />
        <Route path="/about" element={<AboutRoutes />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
