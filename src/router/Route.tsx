import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MainPage } from './pages/Main/MainPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { PlacePage } from './pages/PlacePage/PlacePage';
import { MapTest1 } from '../features/Map/MapTest1';

export const RenderRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="about" element={<MapTest1 />} />

        <Route path="place/:id" element={<PlacePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
