import React from 'react';
import Home from './Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cuisine from './Cuisine';
function Pages() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cuisine />} />
        </Routes>
      
    </div>
  );
}

export default Pages;
