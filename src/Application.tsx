import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';

function Application() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Application;
