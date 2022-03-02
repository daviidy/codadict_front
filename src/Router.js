import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './containers/Welcome';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
