import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AuthPage from '../pages/AuthPage';
import CourseListPage from '../pages/CourseListPage';
import CourseDetailPage from '../pages/CourseDetailPage';
import CreateCoursePage from '../pages/CreateCoursePage';
import PaletteDemo from '../components/common/PaletteDemo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CourseListPage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route path="/create-course" element={<CreateCoursePage />} />
      <Route path="/auth/:action" element={<AuthPage />} />
      <Route path="/palette" element={<PaletteDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;