import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
const Blog = 'https://marmalade-clementine-4c7.notion.site/Welcome-to-John-s-Blog-db8f4b8c138140ada5839ba9a02c7a24';

function Application() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Application;
