import React from 'react';
import './App.css';
import Home from './pages/Home';
import './fonts/Metrisch-Medium.otf';
import './fonts/Metrisch-Bold.otf';
import './fonts/DMSans-Medium.ttf';
import './fonts/DMSans-Regular.ttf';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AboutPage from './pages/About';
import ApplicationPage from './pages/Application';
import NewApplicationPage from './pages/NewApplication';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/application" element={<ApplicationPage />}/>
      <Route path="/new-application" element={<NewApplicationPage />}/>
      <Route path="/sign-in" element={<LoginPage />}/>
      <Route path="/sign-up" element={<RegisterPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
