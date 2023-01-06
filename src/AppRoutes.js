import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import NotFoundPage from './pages/notFound/NotFoundPage';
import MainPage from './pages/main/MainPage';
import BeerPage from './pages/beer/BeerPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/beer" element={<BeerPage />} />
  </Routes>
);

export default AppRoutes;
