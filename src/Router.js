import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './containers/Welcome';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
