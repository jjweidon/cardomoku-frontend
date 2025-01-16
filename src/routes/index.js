import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Onboarding from '../pages/Onboarding';
import Home from '../pages/Home';
import Game from '../pages/Game';
import MyPage from '../pages/MyPage';
import Settings from '../pages/Settings';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/game/:roomId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 